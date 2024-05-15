"use client";

import { useWishlist } from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CartBadge } from "./CartBadge";
import { HeartIcon } from "./SvgIcon";

export function CustomerWishlist() {
  const { data: wishlist, isLoading } = useWishlist();

  const inPendingState = isLoading;

  const wishlistQty = wishlist?.data?.customer?.wishlists[0]?.items_count ?? 0;

  return (
    <Link
      href={`/wishlist/`}
      className={cn("relative")}
      aria-label='go to wishlist'
    >
      <HeartIcon />
      <CartBadge count={wishlistQty} loading={inPendingState} />
    </Link>
  );
}
