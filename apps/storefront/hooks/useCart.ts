import { KEYS, QUERY_KEYS } from "@/lib/constants";
import { doWeHaveCustomer } from "@/lib/utils";
import { sdk } from "@/sdk/sdk.config";
import { useQuery } from "@tanstack/react-query";

async function getCart() {
  const guestCartId = localStorage.getItem(KEYS.CART);

  if (guestCartId) {
    const guestCart = await sdk.magento.cart(guestCartId);

    return guestCart?.data?.cart ?? null;
  }

  const isAuthed = doWeHaveCustomer();

  if (!isAuthed) return null;

  const customerCart = await sdk.magento.customerCart();

  return customerCart?.data?.customerCart ?? null;
}

export function useCart() {
  return useQuery({
    queryKey: [QUERY_KEYS.CART],
    queryFn: getCart,
  });
}
