"use client";

import {
  useAddToWishlist,
  useRemoveFromWishlist,
  useWishlist,
} from "@/hooks/useWishlist";
import { cn, doWeHaveCustomer } from "@/lib/utils";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export function WishlistButton({ productSku }: { productSku: string }) {
  const { data: wishlist, isLoading } = useWishlist();
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();
  const router = useRouter();

  const thisWishlist =
    wishlist &&
    wishlist[0]?.items_v2?.items?.find(
      (item) => item?.product?.sku === productSku
    );

  const inWishlist = thisWishlist ? true : false;

  const inPendingState =
    addToWishlist.isPending || removeFromWishlist.isPending || isLoading;

  const wishlistId = wishlist ? wishlist[0]?.id : null;

  const handleWishlistClick = async () => {
    if (!doWeHaveCustomer()) {
      router.push("/account/signin");
      return;
    }

    if (!wishlistId) return;

    if (!inWishlist) {
      await addToWishlist.mutateAsync({
        id: wishlistId,
        items: [
          {
            quantity: 1,
            sku: productSku,
          },
        ],
      });
      return;
    } else {
      if (!thisWishlist) return;

      await removeFromWishlist.mutateAsync({
        id: wishlistId,
        items: [thisWishlist.id],
      });
      return;
    }
  };

  return (
    <button
      title='Wishlist'
      aria-label={inWishlist ? "remove from wishlist" : "add to wishlist"}
      onClick={handleWishlistClick}
      className='h-8 w-8 disabled:cursor-wait'
      disabled={inPendingState}
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
