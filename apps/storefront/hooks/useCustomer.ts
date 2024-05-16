"use client";

import { QUERY_KEYS } from "@/lib/constants";
import { useSdk } from "@/sdk/sdk";
import { useQuery } from "@tanstack/react-query";
import { useIsAuthed } from "./useIsAuthed";

export function useCustomer() {
  const isAuthed = useIsAuthed();

  const sdk = useSdk();

  return useQuery({
    queryKey: [QUERY_KEYS.CUSTOMER],
    queryFn: () => sdk.magento.customer(),
    enabled: isAuthed,
  });
}
