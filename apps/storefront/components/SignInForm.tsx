'use client';

import { KEYS, QUERY_KEYS } from '@/lib/constants';
import { sdk } from '@/sdk/sdk.config';
import { useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { Input } from './Input';

function SignInForm() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="py-20">
      <h1 className="text-lg text-center font-semibold">Sign In</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setIsLoading(true);

          const formData = new FormData(e.currentTarget);
          const email = formData.get('email') as string;
          const password = formData.get('password') as string;

          const result = await sdk.magento.generateCustomerToken({
            email,
            password,
            recaptchaToken: '',
          });

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

                await queryClient.invalidateQueries({
                  queryKey: [QUERY_KEYS.CART],
                });
              }
            }
          }
          setIsLoading(false);
        }}
        className="space-y-3"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="flex flex-col space-y-2 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-center flex items-center justify-center px-3 py-1.5 h-12 text-[13px] border bg-black text-white border-black hover:bg-[#333] hover:border-[#007cad] transition-colors tracking-[0.85px] uppercase font-semibold outline-none focus-visible:ring-1 focus-visible:ring-[#007cad] focus-visible:border-transparent"
          >
            {isLoading ? 'Loading' : 'Sign In'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
