'use client';

import { cn } from '@/lib/utils';
import * as Slider from '@radix-ui/react-slider';
import { usePathname, useSearchParams } from 'next/navigation';
import * as React from 'react';

export function PriceSlider({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Slider.Root>) {
  const paramName = 'price';
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const priceQueryLinkRef = React.useRef<HTMLAnchorElement | null>(null);

  const [priceRange, setPriceRange] = React.useState<number[]>(() => {
    const hasPriceQuery = searchParams?.has(paramName);

    if (hasPriceQuery) {
      const price = searchParams?.get(paramName)?.split('-') ?? [
        props.min,
        props.max,
      ];
      const minPrice = Number(price[0]);
      const maxPrice = Number(price[1]);

      return [minPrice, maxPrice];
    }

    return [Number(props.min), Number(props.max)] as number[];
  });

  const createQueryString = React.useCallback(
    (value: number[]) => {
      const params = new URLSearchParams(
        searchParams ? searchParams : undefined
      );

      params.set(paramName, value.join('-'));

      return params.toString();
    },
    [searchParams]
  );

  const commitPriceRangeQuery = (value: number[]) => {
    const path = `/uk${pathname}` + '?' + createQueryString(value);

    if (!priceQueryLinkRef.current) return;

    priceQueryLinkRef.current.href = path;

    priceQueryLinkRef.current.click();
  };

  const [min, max] = priceRange;

  return (
    <div>
      <a ref={priceQueryLinkRef} className="sr-only">
        Price Range: from: {min} - to {max}
      </a>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm">£ {min}</span>
        <span className="text-sm">£ {max}</span>
      </div>
      <Slider.Root
        onValueChange={setPriceRange}
        onValueCommit={commitPriceRangeQuery}
        className={cn(
          'relative flex w-full touch-none select-none items-center',
          className
        )}
        value={priceRange}
        min={props.min}
        max={props.max}
      >
        <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full border border-[#c5c5c5] bg-border">
          <Slider.Range className="absolute h-[7px] bg-black" />
        </Slider.Track>
        <Slider.Thumb className="block h-7 w-7 rounded-full border border-[#979797] bg-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
        <Slider.Thumb className="block h-7 w-7 rounded-full border border-[#979797] bg-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
      </Slider.Root>
    </div>
  );
}
