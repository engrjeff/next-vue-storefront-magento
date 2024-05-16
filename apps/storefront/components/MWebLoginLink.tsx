"use client";

import { useIsAuthed } from "@/hooks/useIsAuthed";
import { MWebMenuItem } from "./MWebMenuItem";
import { AccountIcon } from "./SvgIcon";

export function MWebLoginLink() {
  const isAuthed = useIsAuthed();

  if (isAuthed) return null;

  return (
    <MWebMenuItem
      suppressHydrationWarning
      as='link'
      href={`/account/signin`}
      className='flex items-center'
      rel='nofollow'
    >
      <AccountIcon className='mr-2' />
      <span className='inline-block leading-none'>Log In / Join</span>
    </MWebMenuItem>
  );
}
