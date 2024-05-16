"use client";

import { QUERY_KEYS } from "@/lib/constants";
import { useSdk } from "@/sdk/sdk";
import { MagentoTypes } from "@/types/magento.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useRemoveFromCart() {
  const queryClient = useQueryClient();

  const sdk = useSdk();

  return useMutation({
    mutationKey: [QUERY_KEYS.REMOVE_CART_ITEM],
    mutationFn: (args: MagentoTypes.RemoveItemFromCartInput) =>
      sdk.magento.removeItemFromCart(args),
    onSuccess(data) {
      queryClient.setQueryData(
        [QUERY_KEYS.CART],
        data.data?.removeItemFromCart?.cart
      );
    },
  });
}
