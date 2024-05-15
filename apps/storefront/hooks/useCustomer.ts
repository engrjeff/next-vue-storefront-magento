"use client";

import { QUERY_KEYS } from "@/lib/constants";
import { doWeHaveCustomer } from "@/lib/utils";
import { sdk } from "@/sdk/sdk.config";
import { useQuery } from "@tanstack/react-query";

export function useCustomer() {
  const isAuthed = doWeHaveCustomer();

  return useQuery({
    queryKey: [QUERY_KEYS.CUSTOMER],
    queryFn: () => sdk.magento.customer(),
    enabled: isAuthed,
  });
}
