"use client";

import { useSearchParams } from "next/navigation";

const blacklistedQueryNames = [
  "p",
  "pageSize",
  "product_list_order",
  "q",
  "redirect",
  "utm_source",
  "document_referrer",
];

export function useCurrentFilters() {
  const searchParams = useSearchParams();

  const paramEntries: { key: string; value: string }[] = [];
  const bParamEntries: Record<string, any> = {}; // blacklisted url query params

  searchParams?.forEach((value, key) => {
    if (!blacklistedQueryNames.includes(key)) {
      paramEntries.push({ key, value });
    } else {
      bParamEntries[key] = value;
    }
  });

  const filterCount = paramEntries.length;

  return { paramEntries, filterCount, searchParams, bParamEntries };
}
