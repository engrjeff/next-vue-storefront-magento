"use client";

import { useCustomer } from "@/hooks/useCustomer";
import { MWebMenuItem } from "./MWebMenuItem";

export function MWebLogout() {
  const { data: customerData } = useCustomer();

  const customer = customerData?.data?.customer;

  if (!customer) return null;

  const initials =
    customer.firstname?.charAt(0)! + customer.lastname?.charAt(0)!;

  const handleLogout = async () => {};

  return (
    <MWebMenuItem as='button' onClick={handleLogout}>
      <div className='border border-black h-7 w-7 rounded-full inline-flex items-center justify-center text-xs mr-2'>
        <span className='sr-only'>User account initials</span>
        <span className='leading-none'>{initials}</span>
      </div>
      <span>Hey, {customer.firstname}</span>
      <span className='inline-block ml-auto underline'>Log Out</span>
    </MWebMenuItem>
  );
}
