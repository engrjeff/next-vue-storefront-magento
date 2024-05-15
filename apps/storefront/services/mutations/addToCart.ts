import { KEYS } from "@/lib/constants";
import { sdk } from "@/sdk/sdk.config";
import { MagentoTypes } from "@/types/magento.types";

export async function addToCart({
  cartId,
  cartItems,
}: {
  cartId: MagentoTypes.AddConfigurableProductsToCartInput["cart_id"];
  cartItems: MagentoTypes.AddConfigurableProductsToCartInput["cart_items"];
}) {
  try {
    // check if logged in

    const isAuthed = Boolean(cartId);
    // if logged in, then get customer cart id, then add to that cart id
    if (isAuthed) {
      return await sdk.magento.addConfigurableProductsToCart({
        cart_id: cartId,
        cart_items: cartItems,
      });
    }

    // if NOT logged in, check if there's a guest cart
    const guestCartId = localStorage.getItem(KEYS.CART);

    // if no guest cart,
    // create empty cart, add to that cart
    if (!guestCartId) {
      const newGuestCart = await sdk.magento.createEmptyCart();
      const newGuestCartId = newGuestCart?.data?.createEmptyCart;

      if (newGuestCartId) {
        localStorage.setItem(KEYS.CART, newGuestCartId);

        const cartData = await sdk.magento.addConfigurableProductsToCart({
          cart_id: newGuestCartId,
          cart_items: cartItems,
        });

        return cartData;
      }
      return null;
    }
    // else just add to that guest cart
    return await sdk.magento.addConfigurableProductsToCart({
      cart_id: guestCartId,
      cart_items: cartItems,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}
