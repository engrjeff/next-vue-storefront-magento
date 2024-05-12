'use client';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import * as React from 'react';

import { MagentoTypes } from '@/types/magento.types';

const sortParamKey = 'product_list_order';

interface ProductsSortSelectProps {
  id?: string;
  sortOptions?: MagentoTypes.Maybe<MagentoTypes.SortFields>;
}

export function ProductsSortSelect({
  sortOptions,
  id,
}: ProductsSortSelectProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sortValue, setSortValue] = React.useState<string | undefined | null>(
    () =>
      searchParams?.get(sortParamKey)
        ? searchParams?.get(sortParamKey)
        : sortOptions?.default!
  );

  const sortLinkRef = React.useRef<HTMLAnchorElement | null>(null);

  React.useEffect(() => {
    if (!sortValue) return;

    if (!sortLinkRef.current) return;

    sortLinkRef.current.click();
  }, [sortValue]);

  const createQueryString = React.useCallback(
    (value: string) => {
      const defSort = sortOptions?.default!;

      const params = new URLSearchParams(
        searchParams ? searchParams : undefined
      );

      // if the selected sortValue is the same as the default, strip it
      if (value === defSort) {
        if (params.has(sortParamKey)) {
          params.delete(sortParamKey);
        }

        return params.toString();
      }

      params.set(sortParamKey, value);

      return params.toString();
    },
    [searchParams, sortOptions]
  );

  const handleSortOrderChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const value = event.target.value;

    setSortValue(value);
  };

  // helper for mapping sort option label
  const getLabel = (label: string) => {
    const _label = label?.toLowerCase();

    if (_label === 'position') {
      return 'Most Popular';
    }

    if (_label === 'go live at') {
      return 'New In';
    }

    if (_label === 'price') {
      return 'Price Low to High';
    }

    return label;
  };

  const priceSortFieldIndex =
    sortOptions?.options?.findIndex((i) => i?.value === 'price') ??
    sortOptions?.options?.length;

  const sortFieldsOptions = sortOptions?.options
    ?.slice(0, priceSortFieldIndex)
    .concat({
      default_direction: 'DESC',
      use_sort_direction: true,
      label: 'Price High to Low',
      value: 'price_high',
    })
    .concat(sortOptions?.options?.slice(priceSortFieldIndex));

  return (
    <>
      <div className="relative xl:w-[215px] flex-shrink-0">
        {sortValue ? (
          <Link
            href={`${pathname}?${createQueryString(sortValue)}`}
            ref={sortLinkRef}
            className="sr-only"
          >
            Sort: {sortValue}
          </Link>
        ) : null}
        <label htmlFor={id} className="sr-only">
          Sort
        </label>
        <select
          value={sortValue === null ? undefined : sortValue}
          onChange={handleSortOrderChange}
          name="product_list_order"
          id={id}
          className="appearance-none flex h-[50px] xl:h-[35px] w-full items-center select-none justify-between border uppercase font-bold xl:normal-case xl:font-normal border-black xl:border-[#d3d3d3] bg-white pl-3 pr-7 py-1.5 text-[15px] placeholder:text-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        >
          {sortFieldsOptions?.map((option) => (
            <option
              key={`sort-option-${option?.value}`}
              value={option?.value ?? ''}
            >
              {getLabel(option?.label!)}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="h-4 w-4 xl:opacity-50 absolute top-1/2 -translate-y-1/2 right-3" />
      </div>
    </>
  );
}
