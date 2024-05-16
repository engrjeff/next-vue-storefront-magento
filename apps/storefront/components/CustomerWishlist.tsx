"use client";

import { useWishlist } from "@/hooks/useWishlist";
import { useWishlistUIState } from "@/hooks/useWishlistUIState";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CartBadge } from "./CartBadge";
import { HeartIcon } from "./SvgIcon";

export function CustomerWishlist() {
  const { data: wishlist, isLoading } = useWishlist();
  const status = useWishlistUIState((state) => state.status);

  const inPendingState = isLoading;

  const wishlistQty = (wishlist && wishlist[0]?.items_count) ?? 0;

  return (
    <Link
      href={`/wishlist/`}
      className={cn("relative", status === "success" ? "animate-wiggle" : "")}
      aria-label='go to wishlist'
    >
      <HeartIcon />
      <CartBadge count={wishlistQty} loading={inPendingState} />
    </Link>
  );
}
