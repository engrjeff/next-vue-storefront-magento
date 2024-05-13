"use client";

import { useCustomerCart, useGuestCart } from "@/hooks/useCustomerCart";
import Link from "next/link";
import { CartBadge } from "./CartBadge";
import { BagIcon } from "./SvgIcon";

export function Cart() {
  const { data: customerCartData } = useCustomerCart();
  const { data: guestCart } = useGuestCart();

  const isAuthed = customerCartData?.data?.customerCart?.email;

  return (
    <Link href='/account/cart'>
      <BagIcon />
      {isAuthed ? (
        <CartBadge count={customerCartData?.data.customerCart.total_quantity} />
      ) : (
        <CartBadge count={guestCart?.data?.cart?.total_quantity ?? 0} />
      )}
    </Link>
  );
}
