import { addToCart } from "@/services/mutations/addToCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddToCart() {
  const queryClient = useQueryClient();

  const guestCartId = localStorage.getItem("vsf-cart");

  return useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: addToCart,

    async onSuccess() {
      if (!guestCartId) {
        await queryClient.invalidateQueries({
          queryKey: ["customer-cart"],
        });
      }

      await queryClient.invalidateQueries({
        queryKey: ["guest-cart"],
      });
    },
  });
}
