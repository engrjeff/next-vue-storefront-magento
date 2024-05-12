'use client';

import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePagination } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import * as React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pageParamKey = 'p';
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { range } = usePagination({
    total: totalPages,
    initialPage: currentPage > totalPages ? 1 : currentPage,
  });

  const createQueryString = React.useCallback(
    (value: string) => {
      const params = new URLSearchParams(
        searchParams ? searchParams : undefined
      );

      params.set(pageParamKey, value);

      return params.toString();
    },
    [searchParams]
  );

  if (totalPages === 1) {
    return null;
  }

  return (
    <div>
      <ul className="flex items-center gap-1.5">
        {currentPage > 1 ? (
          <li>
            <Link
              prefetch={false}
              href={`${pathname}?${createQueryString(
                (currentPage - 1).toString()
              )}`}
              className={cn(
                'inline-flex items-center justify-center w-[30px] h-[30px] hover:bg-[#f0f0f0] transition-colors duration-300'
              )}
            >
              <span className="sr-only">go to page {currentPage - 1}</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Link>
          </li>
        ) : null}
        {range.map((n, index) => (
          <li key={`page-${n}-${index + 1}`}>
            {n === 'dots' ? (
              <span
                aria-hidden="true"
                className="translate-y-2 leading-none inline-block"
              >
                ....
              </span>
            ) : (
              <Link
                prefetch={false}
                href={`${pathname}?${createQueryString(n.toString())}`}
                className={cn(
                  'text-xs text-center inline-block w-[30px] h-[30px] px-1.5 pt-1.5 bg-[#f9f9f9] border border-[#979797] transition-colors duration-300 xl:hover:text-white xl:hover:bg-black active:text-white active:bg-black',
                  { 'bg-black text-white': n === currentPage }
                )}
              >
                {n}
              </Link>
            )}
          </li>
        ))}
        {currentPage < totalPages ? (
          <li>
            <Link
              prefetch={false}
              href={`${pathname}?${createQueryString(
                (currentPage + 1).toString()
              )}`}
              className={cn(
                'inline-flex items-center justify-center w-[30px] h-[30px] hover:bg-[#f0f0f0] transition-colors duration-300'
              )}
            >
              <span className="sr-only">go to page {currentPage + 1}</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
