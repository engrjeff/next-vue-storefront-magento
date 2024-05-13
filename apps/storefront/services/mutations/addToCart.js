"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = void 0;
const sdk_config_1 = require("@/sdk/sdk.config");
const guestCartIdKey = "vsf-cart";
async function addToCart({ cartId, cartItems, }) {
    try {
        // check if logged in
        const isAuthed = Boolean(cartId);
        // if logged in, then get customer cart id, then add to that cart id
        if (isAuthed) {
            await sdk_config_1.sdk.magento.addConfigurableProductsToCart({
                cart_id: cartId,
                cart_items: cartItems,
            });
            return;
        }
        // if NOT logged in, check if there's a guest cart
        const guestCartId = localStorage.getItem(guestCartIdKey);
        // if no guest cart,
        // create empty cart, add to that cart
        if (!guestCartId) {
            const newGuestCart = await sdk_config_1.sdk.magento.createEmptyCart();
            const newGuestCartId = newGuestCart?.data?.createEmptyCart;
            if (newGuestCartId) {
                localStorage.setItem(guestCartIdKey, newGuestCartId);
                await sdk_config_1.sdk.magento.addConfigurableProductsToCart({
                    cart_id: newGuestCartId,
                    cart_items: cartItems,
                });
            }
            return;
        }
        // else just add to that guest cart
        await sdk_config_1.sdk.magento.addConfigurableProductsToCart({
            cart_id: guestCartId,
            cart_items: cartItems,
        });
    }
    catch (error) {
        console.log(error);
    }
}
exports.addToCart = addToCart;
