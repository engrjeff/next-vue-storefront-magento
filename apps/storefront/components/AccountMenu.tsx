"use client";

import { useCustomer } from "@/hooks/useCustomer";
import * as HoverCard from "@radix-ui/react-hover-card";
import Link from "next/link";
import { AccountIcon } from "./SvgIcon";

export function AccountMenu() {
  const { data: customerData } = useCustomer();

  const customer = customerData?.data?.customer;

  if (!customer)
    return (
      <Link href='/account/signin'>
        <AccountIcon />
        <span className='sr-only'>Account sign in</span>
      </Link>
    );

  const initials =
    customer.firstname!?.charAt(0) + customer.lastname!?.charAt(0);

  return (
    <HoverCard.Root openDelay={0}>
      <HoverCard.Trigger asChild>
        <button className='border border-black mt-1.5 mr-1 h-[25px] w-[27px] rounded-full lg:inline-flex items-center justify-center text-sm hidden'>
          <span className='sr-only'>User account menu</span>
          <span className='text-[11px] text-black'>{initials}</span>
        </button>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className='z-20'>
          <HoverCard.Arrow
            height={8}
            width={15}
            className='fill-white stroke-black'
          />
          <ul className='w-44 border bg-white border-[#bbbbbb]' role='menu'>
            <li>
              <Link
                className='uppercase text-[13px] py-2 w-full border border-b px-4 text-center inline-block'
                href={`/customer/account/`}
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                className='uppercase text-[13px] py-2 w-full border border-b px-4 text-center inline-block'
                href={`/sales/order/history/`}
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                className='uppercase text-[13px] py-2 w-full border border-b px-4 text-center inline-block'
                href={`/customer/address/`}
              >
                Address Book
              </Link>
            </li>
            <li>
              <button className='uppercase text-[13px] py-2 w-full border border-b px-4 text-center inline-block font-semibold underline'>
                Logout
              </button>
            </li>
          </ul>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
