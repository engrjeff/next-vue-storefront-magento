"use client";

import { KEYS, QUERY_KEYS } from "@/lib/constants";
import { useSdk } from "@/sdk/sdk";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCustomerCart() {
  const sdk = useSdk();

  return useQuery({
    queryKey: [QUERY_KEYS.CUSTOMER_CART],
    queryFn: () => sdk.magento.customerCart(),
  });
}

export function useGuestCart() {
  const guestCartId = localStorage.getItem(KEYS.CART);

  const sdk = useSdk();

  return useQuery({
    queryKey: [QUERY_KEYS.GUEST_CART, guestCartId],
    queryFn: () => sdk.magento.cart(guestCartId!),
    enabled: Boolean(guestCartId),
  });
}

export function useMergeCart(customerCartId?: string) {
  const queryClient = useQueryClient();

  const sdk = useSdk();

  const guestCartId = localStorage.getItem(KEYS.CART);

  return useMutation({
    mutationKey: [QUERY_KEYS.MERGE_CARTS],
    mutationFn: () =>
      sdk.magento.mergeCarts({
        sourceCartId: guestCartId!,
        destinationCartId: customerCartId!,
      }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART],
      });

      localStorage.removeItem(KEYS.CART);
    },
  });
}
