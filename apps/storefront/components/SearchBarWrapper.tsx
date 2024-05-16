"use client";

import { useSearchParams } from "next/navigation";
import { MWebSearchBar } from "./MWebSearchBar";
import { SearchBar } from "./SearchBar";

export function SearchBarWrapper() {
  const searchParams = useSearchParams();

  return <SearchBar key={searchParams?.get("q")} />;
}

export function MWebSearchBarWrapper() {
  const searchParams = useSearchParams();

  return <MWebSearchBar key={searchParams?.get("q")} />;
}
