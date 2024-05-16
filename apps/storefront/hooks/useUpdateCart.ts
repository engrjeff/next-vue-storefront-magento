"use client";

import { QUERY_KEYS } from "@/lib/constants";
import { useSdk } from "@/sdk/sdk";
import { MagentoTypes } from "@/types/magento.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateCart() {
  const queryClient = useQueryClient();

  const sdk = useSdk();

  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_CART_ITEM],
    mutationFn: (args: MagentoTypes.UpdateCartItemsInput) =>
      sdk.magento.updateCartItems(args),
    onSuccess(data) {
      queryClient.setQueryData(
        [QUERY_KEYS.CART],
        data.data?.updateCartItems?.cart
      );
    },
  });
}
