'use client';

import { QUERY_KEYS } from '@/lib/constants';
import { addToCart } from '@/services/mutations/addToCart';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_TO_CART],
    mutationFn: addToCart,

    async onSuccess() {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART],
      });
    },
  });
}
