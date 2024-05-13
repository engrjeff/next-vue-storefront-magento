"use client";

import { SfButton, SfInput } from "@storefront-ui/react";

import { sdk } from "@/sdk/sdk.config";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useState } from "react";

function SignInForm() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='py-20'>
      <h1 className='text-lg text-center font-semibold'>Sign In</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setIsLoading(true);

          const formData = new FormData(e.currentTarget);
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;

          const result = await sdk.magento.generateCustomerToken({
            email,
            password,
            recaptchaToken: "",
          });

          if (result.data?.generateCustomerToken?.token) {
            Cookies.set(
              "vsf-customer",
              result.data.generateCustomerToken.token
            );

            const guestCartId = localStorage.getItem("vsf-cart");

            if (guestCartId) {
              const customerCart = await sdk.magento.customerCart();

              const customerCartId = customerCart.data.customerCart.id;
              if (customerCartId) {
                await sdk.magento.mergeCarts({
                  destinationCartId: customerCartId,
                  sourceCartId: guestCartId,
                });

                localStorage.removeItem("vsf-cart");

                await queryClient.invalidateQueries({
                  queryKey: ["customer-cart"],
                });
              }
            }
          }
          setIsLoading(false);
        }}
        className='space-y-3'
      >
        <div className='flex flex-col space-y-2'>
          <label htmlFor='email'>Email</label>
          <SfInput type='email' name='email' id='email' placeholder='Email' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='password'>Password</label>
          <SfInput
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </div>

        <div className='flex flex-col space-y-2 pt-4'>
          <SfButton type='submit' disabled={isLoading}>
            {isLoading ? "Loading" : "Sign In"}
          </SfButton>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
