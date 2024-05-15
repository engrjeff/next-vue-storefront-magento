"use client";

import { KEYS } from "@/lib/constants";
import { sdk } from "@/sdk/sdk.config";
import Cookies from "js-cookie";

export const login = async (email: string, password: string) => {
  const result = await sdk.magento.generateCustomerToken({
    email,
    password,
    recaptchaToken: "",
  });

  if (result.errors) return false;

  if (result.data?.generateCustomerToken?.token) {
    Cookies.set(KEYS.CUSTOMER, result.data.generateCustomerToken.token);

    const guestCartId = localStorage.getItem(KEYS.CART);

    if (guestCartId) {
      const customerCart = await sdk.magento.customerCart();

      const customerCartId = customerCart.data.customerCart.id;
      if (customerCartId) {
        await sdk.magento.mergeCarts({
          destinationCartId: customerCartId,
          sourceCartId: guestCartId,
        });

        localStorage.removeItem(KEYS.CART);
      }
    }

    return true;
  }

  return false;
};
