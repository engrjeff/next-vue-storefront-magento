"use client";

import { useCurrentFilters } from "@/hooks/useCurrentFilters";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export function FilterCounter() {
  const pathname = usePathname();

  const { filterCount, bParamEntries } = useCurrentFilters();

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(bParamEntries);

    if (params.size === 0) return "";

    return "?" + params.toString();
  }, [bParamEntries]);

  if (filterCount === 0) return null;

  return (
    <div className='pt-px pb-4 flex justify-between items-center'>
      <span className='font-semibold uppercase text-[15px]'>
        Filters ({filterCount})
      </span>
      <Link
        href={pathname + createQueryString()}
        className='underline hover:no-underline text-[13px]'
      >
        Clear all
      </Link>
    </div>
  );
}
