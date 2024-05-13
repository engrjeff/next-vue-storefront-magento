import Link from "next/link";
import { AccountIcon } from "./SvgIcon";

export function AccountMenu() {
  return (
    <Link href='/account/signin'>
      <AccountIcon />
      <span className='sr-only'>Account sign in</span>
    </Link>
  );
}
