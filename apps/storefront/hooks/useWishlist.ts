"use client";

import { QUERY_KEYS } from "@/lib/constants";
import { doWeHaveCustomer } from "@/lib/utils";
import { useSdk } from "@/sdk/sdk";
import { MagentoTypes } from "@/types/magento.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useWishlistUIState } from "./useWishlistUIState";

export function useWishlistCount() {
  const sdk = useSdk();

  return useQuery({
    queryKey: [QUERY_KEYS.WISHLIST_COUNT],
    queryFn: () => sdk.magento.wishlistItemsCount(),
  });
}

export function useWishlist() {
  const isAuthed = doWeHaveCustomer();

  const sdk = useSdk();

  return useQuery({
    queryKey: [QUERY_KEYS.WISHLIST],
    queryFn: async () => {
      if (!isAuthed) return null;

      const result = await sdk.magento.wishlist({});

      return result?.data?.customer?.wishlists;
    },
  });
}

export function useAddToWishlist() {
  const sdk = useSdk();
  const queryClient = useQueryClient();
  const wishlistUI = useWishlistUIState();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_TO_WISHLIST],
    mutationFn: (args: MagentoTypes.AddProductsToWishlistMutationVariables) =>
      sdk.magento.addProductToWishList(args),
    scope: {
      id: QUERY_KEYS.ADD_TO_WISHLIST,
    },
    onSuccess(data) {
      queryClient.setQueryData(
        [QUERY_KEYS.WISHLIST],
        [data.data?.addProductsToWishlist?.wishlist]
      );

      wishlistUI.setStatus("success");

      setTimeout(() => {
        wishlistUI.setStatus("idle");
      }, 3000);
    },
  });
}

export function useRemoveFromWishlist() {
  const sdk = useSdk();
  const queryClient = useQueryClient();
  const wishlistUI = useWishlistUIState();

  return useMutation({
    mutationKey: [QUERY_KEYS.REMOVE_FROM_WISHLIST],
    mutationFn: (
      args: MagentoTypes.RemoveProductsFromWishlistMutationVariables
    ) => sdk.magento.removeProductsFromWishlist(args),
    scope: {
      id: QUERY_KEYS.REMOVE_FROM_WISHLIST,
    },
    onSuccess(data) {
      queryClient.setQueryData(
        [QUERY_KEYS.WISHLIST],
        [data.data?.removeProductsFromWishlist?.wishlist]
      );

      wishlistUI.setStatus("success");

      setTimeout(() => {
        wishlistUI.setStatus("idle");
      }, 3000);
    },
  });
}
