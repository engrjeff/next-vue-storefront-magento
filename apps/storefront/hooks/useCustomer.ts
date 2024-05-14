"use client";

import { QUERY_KEYS } from "@/lib/constants";
import { sdk } from "@/sdk/sdk.config";
import { useQuery } from "@tanstack/react-query";

export function useCustomer() {
  return useQuery({
    queryKey: [QUERY_KEYS.CUSTOMER],
    queryFn: () => sdk.magento.customer(),
  });
}
