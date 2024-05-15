"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/MenuSheet";
import { useCurrentFilters } from "@/hooks/useCurrentFilters";
import { cn } from "@/lib/utils";
import { MagentoTypes } from "@/types/magento.types";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import * as React from "react";
import { CategoryFilter } from "./CategoryFilter";
import { PriceSlider } from "./PriceSlider";
import { ProductFiltersProps } from "./ProductFilters";

export function MWebProductFilters(props: ProductFiltersProps) {
  const { filters, subcategories, rootCategory, priceRangeFilters } = props;

  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();

  const { filterCount } = useCurrentFilters();

  React.useEffect(() => {
    if (!window) return;

    const resizeCallback = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  const minPrice = priceRangeFilters?.options
    ? priceRangeFilters.options[0]?.value?.split("_")[0]
    : 0;
  const maxPrice = priceRangeFilters?.options
    ? priceRangeFilters.options[priceRangeFilters.count! - 1]?.value?.split(
        "_"
      )[1]
    : 0;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className='h-[50px] px-3 py-1.5 flex items-center justify-center gap-2 uppercase font-bold w-full border border-black active:bg-[#666666] active:border-[#666666] active:text-white'>
          Filter{" "}
          {filterCount > 0 ? (
            <CheckIcon className='h-4 w-4 text-black' />
          ) : null}
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col justify-between overflow-y-auto h-[calc(100%-60px)] max-h-[calc(100%-60px)] relative'>
          <ul>
            {subcategories && subcategories.length > 0 && (
              <li className='border-b'>
                <Sheet>
                  <SheetTrigger asChild>
                    <button className='w-full flex items-center justify-between py-[15px] px-5'>
                      <span className='leading-[28px] uppercase'>Category</span>
                      <ChevronRightIcon className='h-4 w-4' />
                    </button>
                  </SheetTrigger>
                  <SheetContent className='z-[90]'>
                    <SheetHeader>
                      <SheetClose className='absolute left-[15px] top-[15px]'>
                        <ChevronLeftIcon className='h-5 w-5' />
                      </SheetClose>
                      <SheetTitle>Category</SheetTitle>
                    </SheetHeader>
                    <div className='flex flex-col justify-between overflow-y-auto max-h-[calc(100%-80px)]'>
                      <CategoryFilter
                        rootCategory={rootCategory}
                        categoriesFilters={subcategories}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </li>
            )}
            {filters
              ?.filter((f) => !["category_uid"].includes(f?.attribute_code!))
              .map((filter) => {
                const hasOptions = filter && filter.count && filter.count > 0;

                if (!hasOptions) return null;

                if (filter.attribute_code === "price") {
                  return (
                    <li
                      key={`mobile-facet-filter-${priceRangeFilters?.attribute_code}`}
                      className='border-b'
                    >
                      <Sheet>
                        <SheetTrigger asChild>
                          <button className='w-full flex items-center justify-between py-[15px] px-5'>
                            <span className='leading-[28px] uppercase'>
                              {priceRangeFilters?.label}
                            </span>
                            <ChevronRightIcon className='h-4 w-4' />
                          </button>
                        </SheetTrigger>
                        <SheetContent className='z-[90]'>
                          <SheetHeader>
                            <SheetClose className='absolute left-[15px] top-[15px]'>
                              <ChevronLeftIcon className='h-5 w-5' />
                            </SheetClose>
                            <SheetTitle>Price</SheetTitle>
                          </SheetHeader>
                          <div className='p-6 border-b'>
                            <PriceSlider
                              defaultValue={[
                                Number(minPrice),
                                Number(maxPrice),
                              ]}
                              min={Number(minPrice)}
                              max={Number(maxPrice)}
                              step={20}
                              key={searchParams?.toString()}
                            />
                          </div>
                        </SheetContent>
                      </Sheet>
                    </li>
                  );
                }

                return (
                  <li
                    key={`mobile-facet-filter-${filter.attribute_code}`}
                    className='border-b'
                  >
                    <MWebProductFilterOptions filterOptions={filter} />
                  </li>
                );
              })}
          </ul>
          <div className='px-[15px] py-8'>
            <button
              onClick={() => setOpen(false)}
              className='h-12 px-3 py-1.5 text-[13px] flex items-center justify-center gap-2 uppercase font-bold w-full bg-black text-white'
            >
              View Items
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MWebProductFilterOptions({
  filterOptions,
}: {
  filterOptions?: MagentoTypes.Maybe<MagentoTypes.Aggregation>;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='w-full flex items-center justify-between py-[15px] px-5'>
          <span className='leading-[28px] uppercase'>
            {filterOptions?.label}
          </span>
          <ChevronRightIcon className='h-4 w-4' />
        </button>
      </SheetTrigger>
      <SheetContent className='z-[90]'>
        <SheetHeader>
          <SheetClose className='absolute left-[15px] top-[15px]'>
            <ChevronLeftIcon className='h-5 w-5' />
          </SheetClose>
          <SheetTitle>{filterOptions?.label}</SheetTitle>
        </SheetHeader>
        <ul className='flex flex-col justify-between overflow-y-auto max-h-[calc(100%-80px)]'>
          {filterOptions?.options?.map((option) => (
            <li key={`filter-option-value-${option}`} className='border-b'>
              <MWebFilterItem
                label={option?.label!}
                value={option?.value!}
                name={filterOptions.attribute_code}
              />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

function MWebFilterItem({
  name,
  label,
  value,
}: {
  name: string;
  label: string;
  value: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(() => {
    const params = new URLSearchParams(searchParams ? searchParams : undefined);

    const paramValue = searchParams?.getAll(name);

    if (paramValue?.includes(String(value))) {
      params.delete(name, value);
    } else {
      params.append(name, value);
    }

    if (params.has("p")) {
      params.delete("p");
    }

    return params.toString();
  }, [name, searchParams, value]);

  return (
    <Link
      href={pathname + "?" + createQueryString()}
      className='w-full flex items-center justify-between py-[15px] px-5'
    >
      <span className='leading-[28px] uppercase'>{label}</span>
      <span
        className={cn(
          "h-5 w-5 rounded-full flex items-center justify-center overflow-hidden border border-[#333333]",
          { "bg-[#333333]": searchParams?.getAll(name).includes(value) }
        )}
      >
        <CheckIcon className='h-4 w-4 text-white' />
      </span>
    </Link>
  );
}
