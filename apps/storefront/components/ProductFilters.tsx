"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Aggregation,
  CategoryTree,
  Maybe,
} from "@vue-storefront/magento-types";
import { useSearchParams } from "next/navigation";
import * as React from "react";
// import CategoryFilter from "./CategoryFilter";
// import FilterCounter from "./FilterCounter";
// import PriceSlider from "./PriceSlider";
import { RadioFilterButton } from "./RadioFilterButton";

export interface ProductFiltersProps {
  rootCategory?: Maybe<CategoryTree>;
  filters?: Maybe<Maybe<Aggregation>[]>;
  subcategories?: Maybe<Maybe<CategoryTree>[]>;
  priceRangeFilters?: Maybe<Aggregation>;
}

function FilterAccordionItem({
  label,
  children,
}: React.PropsWithChildren<{ label: string }>) {
  return (
    <Accordion.Item value={label} className='border-b border-[#d9d9d9]'>
      <Accordion.Trigger className='group flex items-center justify-between pt-[14px] pb-[14px] w-full'>
        <span className='font-semibold uppercase text-[15px]'>{label}</span>
        <ChevronRightIcon className='h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-90' />
      </Accordion.Trigger>
      <Accordion.Content className='pb-[14px]'>{children}</Accordion.Content>
    </Accordion.Item>
  );
}

export function ProductFilters(props: ProductFiltersProps) {
  const { filters, subcategories, rootCategory, priceRangeFilters } = props;

  const priceFilter = priceRangeFilters;

  const minPrice = priceFilter?.options
    ? priceFilter.options[0]?.value?.split("_")[0]
    : 0;
  const maxPrice = priceFilter?.options
    ? priceFilter.options[priceFilter.count! - 1]?.value?.split("_")[1]
    : 0;

  const searchParams = useSearchParams();

  return (
    <div className='w-[215px] flex-shrink-0 hidden xl:block'>
      {/* <FilterCounter /> */}
      <Accordion.Root
        type='multiple'
        defaultValue={["Category"]}
        className='border-t border-[#d9d9d9]'
      >
        {/* {subcategories && subcategories.length > 0 ? (
          <FilterAccordionItem label='Category'>
            <CategoryFilter
              rootCategory={rootCategory}
              categoriesFilters={subcategories}
            />
          </FilterAccordionItem>
        ) : null} */}

        {filters
          ?.filter((f) => !["category_uid"].includes(f?.attribute_code!))
          .map((filter) => {
            const hasOptions = filter && filter.count && filter.count > 0;

            if (!hasOptions) return null;

            // if (filter.attribute_code === "price") {
            //   return (
            //     <FilterAccordionItem
            //       key={`facet-filter-${priceFilter?.attribute_code}`}
            //       label={priceFilter?.label!}
            //     >
            //       <div className='px-[15px] pb-[15px]'>
            //         <PriceSlider
            //           defaultValue={[Number(minPrice), Number(maxPrice)]}
            //           min={Number(minPrice)}
            //           max={Number(maxPrice)}
            //           step={20}
            //           key={searchParams?.toString()}
            //         />
            //       </div>
            //     </FilterAccordionItem>
            //   );
            // }

            return (
              <FilterAccordionItem
                key={`facet-filter-${filter.attribute_code}`}
                label={filter.label!}
              >
                <ul>
                  {filter.options?.map((option) => (
                    <li key={`size-filter-${option?.value}`}>
                      <RadioFilterButton
                        name={filter.attribute_code}
                        label={option?.label!}
                        value={option?.value!}
                      />
                    </li>
                  ))}
                </ul>
              </FilterAccordionItem>
            );
          })}
      </Accordion.Root>
    </div>
  );
}
