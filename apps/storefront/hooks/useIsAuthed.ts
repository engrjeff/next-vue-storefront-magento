"use client";

import { doWeHaveCustomer } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useIsAuthed() {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsAuthed(doWeHaveCustomer());
  }, []);

  return isAuthed;
}
