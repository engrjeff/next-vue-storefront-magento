'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { MagentoTypes } from '@/types/magento.types';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
// import { Cog8ToothIcon } from '@heroicons/react/24/solid';
// import MiniCartItemDelete from './MiniCartItemDelete';
// import MiniCartItemUpdateQty from './MiniCartItemUpdateQty';

export function MiniCartItem({
  cartItem,
}: {
  cartItem: MagentoTypes.Maybe<MagentoTypes.ConfigurableCartItem>;
}) {
  const fallbackImageUrl = '/images/plp-placeholder.png';

  const [detailsShown, setDetailsShown] = useState(false);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isUsingPlaceholder, setIsUsingPlaceholder] = useState(false);

  const thumbnailUrl = cartItem?.product?.thumbnail?.url;

  return (
    <div className="flex py-4 gap-3 select-none">
      <div className="relative">
        <Image
          ref={imageRef}
          src={thumbnailUrl ? thumbnailUrl : fallbackImageUrl}
          alt={cartItem?.product?.thumbnail?.label!}
          width={80}
          height={120}
          className={cn(
            'w-20 h-[120px]',
            isUsingPlaceholder ? 'object-contain' : ''
          )}
          onError={() => {
            if (!imageRef.current) return;

            imageRef.current.src = fallbackImageUrl;

            setIsUsingPlaceholder(true);
          }}
        />
      </div>
      <div className="flex-1 space-y-3">
        <a
          href={`/p/${cartItem?.product.canonical_url}`}
          className="text-sm text-uigreen hover:underline"
        >
          {cartItem?.product.name}
        </a>
        <div>
          <button
            onClick={() => setDetailsShown((shown) => !shown)}
            className="text-sm flex items-center"
          >
            See Details{' '}
            <ChevronDownIcon
              className={cn(
                'h-3 w-3 ml-2',
                detailsShown ? 'rotate-180' : 'rotate-0'
              )}
            />
          </button>
          {detailsShown ? (
            <div className="pt-2 pb-4">
              <p className="text-sm font-bold">Size</p>
              {cartItem?.configurable_options ? (
                <span className="text-sm">
                  {cartItem?.configurable_options[0]?.value_label}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
        <strong className="text-sm font-bold">
          £
          {
            cartItem?.configured_variant?.price_range?.minimum_price
              ?.final_price?.value
          }
        </strong>
        <div className="flex items-center gap-2">
          {/* <MiniCartItemUpdateQty cartItem={cartItem} /> */}
          <div className="ml-auto flex items-center gap-3">
            {/* <a
              className="hidden sr-only invisible"
              href={`${site.baseUrl}/checkout/cart/configure/id/${cartItem?.id}/product_id/${cartItem?.product.id}/`}
              title="Edit item"
            >
              <span className="sr-only">Edit item</span>
              <Cog8ToothIcon className="h-4 w-4 text-neutral-700" />
            </a>
            <MiniCartItemDelete cart_item_uid={cartItem?.uid} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
