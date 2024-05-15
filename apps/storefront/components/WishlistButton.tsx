"use client";

import { useWishlist } from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";
import { HeartIcon } from "@heroicons/react/24/outline";

export function WishlistButton({ productSku }: { productSku: string }) {
  const { data: wishlist, isLoading } = useWishlist();

  const inWishlist =
    wishlist?.data?.customer?.wishlists[0]?.items_v2?.items?.find(
      (item) => item?.product?.sku === productSku
    );
  const handleWishlistClick = async () => {};

  return (
    <button
      title='Wishlist'
      aria-label={inWishlist ? "remove from wishlist" : "add to wishlist"}
      onClick={handleWishlistClick}
      className='h-8 w-8'
      disabled={isLoading}
    >
      <HeartIcon
        key={String(inWishlist)}
        className={cn(
          "h-8 w-8 text-black/70",
          inWishlist ? "fill-black" : "hover:fill-black"
        )}
      />
    </button>
  );
}
