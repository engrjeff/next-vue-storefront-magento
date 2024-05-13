'use client';

import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as HoverCard from '@radix-ui/react-hover-card';
import Link from 'next/link';
import { useState } from 'react';
import { CartBadge } from './CartBadge';
import { MiniCartListing } from './MiniCartListing';
import { BagIcon } from './SvgIcon';

export function MiniCart() {
  const [open, setOpen] = useState(false);

  const { data: cartData } = useCart();

  const cartQuantity = cartData?.total_quantity ?? 0;

  return (
    <HoverCard.Root open={open} onOpenChange={setOpen} openDelay={0}>
      <HoverCard.Trigger asChild>
        <Link
          href={`/account/cart/`}
          className={cn('relative leading-[38px]')}
          aria-label="go to cart"
        >
          <BagIcon />
          <CartBadge count={cartQuantity} />
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="z-40 w-[370px] -translate-y-1.5 border border-[#bbbbbb] shadow"
          align="end"
        >
          <div className="bg-white relative">
            <button
              title="Close"
              aria-label="close"
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            {cartQuantity === 0 ? (
              <div className="py-7 px-8">
                <p className="font-bold text-center text-sm pt-[33px] pb-[22px]">
                  You have no items in your shopping cart.
                </p>
              </div>
            ) : (
              <MiniCartListing />
            )}
          </div>
          <HoverCard.Arrow
            strokeWidth={2}
            className="stroke-[#bbb] shadow fill-white"
          />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
