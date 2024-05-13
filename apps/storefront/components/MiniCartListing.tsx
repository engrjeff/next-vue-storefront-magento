'use client';

import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import { MiniCartItem } from './MiniCartItem';

export function MiniCartListing() {
  const { data: cart } = useCart();

  if (!cart) return null;

  return (
    <div>
      <div className="pt-7 px-8 flex items-start justify-between">
        <p className="text-[15px]">
          <strong className="font-semibold">{cart.total_quantity}</strong>{' '}
          {cart.total_quantity ? 'Items' : 'Item'} in Cart
        </p>
        <div>
          <p className="text-[15px]">Cart Subtotal :</p>
          <p className="text-lg font-bold text-right">
            £{cart.prices?.subtotal_excluding_tax?.value?.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="px-8 pt-6 pb-4 border-[#bbb] border-b">
        <Link
          href={`/checkout/`}
          title="Proceed to Checkout"
          className="bg-uigreen uppercase hover:bg-opacity-80 h-14 text-white rounded font-heading font-bold w-full flex items-center justify-center px-4 py-2 disabled:opacity-40"
        >
          Checkout
        </Link>
      </div>
      <div className="max-h-[50vh] overflow-y-auto pb-6 border-[#bbb] border-b">
        <ul className="px-4 divide-y divide-[#bbb]">
          {cart.items?.map((cartItem) => (
            <li key={`cart-item-${cartItem?.uid}`}>
              <MiniCartItem cartItem={cartItem} />
            </li>
          ))}
        </ul>
      </div>
      <div className="py-6 text-center">
        <a
          href={`/account/cart/`}
          className="text-sm inline-block text-uigreen hover:underline text-center"
        >
          View and Edit Cart
        </a>
      </div>
    </div>
  );
}
