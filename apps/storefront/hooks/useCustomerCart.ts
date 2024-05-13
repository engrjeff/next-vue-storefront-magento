"use client";

import { sdk } from "@/sdk/sdk.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCustomerCart() {
  return useQuery({
    queryKey: ["customer-cart"],
    queryFn: () => sdk.magento.customerCart(),
  });
}

export function useGuestCart() {
  const guestCartId = localStorage.getItem("vsf-cart");

  return useQuery({
    queryKey: ["guest-cart", guestCartId],
    queryFn: () => sdk.magento.cart(guestCartId!),
    enabled: Boolean(guestCartId),
  });
}

export function useMergeCart(customerCartId?: string) {
  const queryClient = useQueryClient();

  const guestCartId = localStorage.getItem("vsf-cart");

  return useMutation({
    mutationKey: ["merge-cart"],
    mutationFn: () =>
      sdk.magento.mergeCarts({
        sourceCartId: guestCartId!,
        destinationCartId: customerCartId!,
      }),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["customer-cart"],
      });

      localStorage.removeItem("vsf-cart");
    },
  });
}
