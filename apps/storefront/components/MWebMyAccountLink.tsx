"use client";

import { useIsAuthed } from "@/hooks/useIsAuthed";
import { MWebMenuItem } from "./MWebMenuItem";

export function MWebMyAccountLink() {
  const isAuthed = useIsAuthed();

  if (!isAuthed) return null;

  return (
    <MWebMenuItem as='link' href={`/customer/account/`}>
      My Account
    </MWebMenuItem>
  );
}
