'use client';

import { useCart } from '@/hooks/useCart';
import { MagentoTypes } from '@/types/magento.types';
import {
  SfButton,
  SfIconAdd,
  SfIconDelete,
  SfIconRemove,
} from '@storefront-ui/react';
import Image from 'next/image';
import { useId, useState } from 'react';

export function CartView() {
  const cart = useCart();

  if (cart.isLoading) return <p>Loading...</p>;

  return (
    <ul className="space-y-4">
      {cart?.data?.items?.map((cartItem) => (
        <li key={`cart-product-item-${cartItem.uid}`}>
          <CartItem cartItem={cartItem} />
        </li>
      ))}
    </ul>
  );
}

function CartItem({
  cartItem,
}: {
  cartItem: MagentoTypes.ConfigurableCartItem;
}) {
  const inputId = useId();

  const [qty, setQty] = useState(() => cartItem?.quantity);

  return (
    <div className="flex">
      <Image
        src={cartItem.product?.thumbnail?.url!}
        alt={cartItem.product?.thumbnail?.label!}
        width={80}
        height={120}
        className="object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold font-sans text-sm mb-1">
          {cartItem.product?.name}
        </h2>
        <strong className="text-sm font-bold">
          £
          {
            cartItem?.configured_variant?.price_range?.minimum_price
              ?.final_price?.value
          }
        </strong>
        <p className="text-sm font-bold">
          Size:{' '}
          {cartItem?.configurable_options ? (
            <span className="text-sm font-normal">
              {cartItem?.configurable_options[0]?.value_label}
            </span>
          ) : null}
        </p>
        <div className="flex items-center gap-4 pt-4 sm:mt-0">
          <div className="flex border border-neutral-300 rounded-md">
            <SfButton
              variant="tertiary"
              square
              className="rounded-r-none"
              aria-controls={inputId}
              aria-label="Decrease value"
            >
              <SfIconRemove />
            </SfButton>
            <input
              id={inputId}
              type="number"
              role="spinbutton"
              className="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
              min={1}
              max={10}
              value={qty}
              onChange={(e) => setQty(e.currentTarget.valueAsNumber)}
            />
            <SfButton
              variant="tertiary"
              square
              className="rounded-l-none"
              aria-controls={inputId}
              aria-label="Increase value"
            >
              <SfIconAdd />
            </SfButton>
          </div>
          <button
            aria-label="Remove"
            type="button"
            className="text-neutral-500 text-xs font-light flex items-center px-3 py-1.5"
          >
            <SfIconDelete />
            <span className="hidden ml-1.5 sm:block"> Remove </span>
          </button>
        </div>
      </div>
    </div>
  );
}
