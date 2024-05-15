"use client";

import { QUERY_KEYS } from "@/lib/constants";
import { sdk } from "@/sdk/sdk.config";
import { MagentoTypes } from "@/types/magento.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateCart() {
  const queryClient = useQueryClient();

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
