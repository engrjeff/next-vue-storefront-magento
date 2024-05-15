"use client";

import { QUERY_KEYS } from "@/lib/constants";
import { doWeHaveCustomer } from "@/lib/utils";
import { sdk } from "@/sdk/sdk.config";
import { useQuery } from "@tanstack/react-query";

export function useWishlistCount() {
  return useQuery({
    queryKey: [QUERY_KEYS.WISHLIST_COUNT],
    queryFn: () => sdk.magento.wishlistItemsCount(),
  });
}

export function useWishlist() {
  const isAuthed = doWeHaveCustomer();

  return useQuery({
    queryKey: [QUERY_KEYS.WISHLIST],
    queryFn: () => (isAuthed ? sdk.magento.wishlist({}) : null),
  });
}
