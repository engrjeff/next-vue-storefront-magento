/* eslint-disable @next/next/no-img-element */
"use client";

import { countryOptions } from "@/lib/options";
import { setStoreCookie } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { MWebMenuItem } from "./MWebMenuItem";

export function MWebCountrySelector() {
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);

  const currentCountry = countryOptions[4];

  const pagePath =
    typeof window !== "undefined" ? window.location.pathname.split("/")[2] : "";

  return (
    <>
      <MWebMenuItem
        as='button'
        onClick={() => setSubMenuOpen(true)}
        className='flex items-center justify-between'
      >
        <span>GBP</span>
        <img
          src={currentCountry?.image}
          alt={currentCountry?.countryName}
          width={25}
          height={25}
        />
      </MWebMenuItem>
      <div
        data-submenu-open={subMenuOpen}
        className='absolute z-[2] -translate-y-[10px] inset-y-0 -left-full w-full bg-white data-[submenu-open=true]:left-0 transition-[left] duration-300'
      >
        <div className='h-full w-full'>
          <div className='relative h-[54px] p-[15px] text-[12px] whitespace-nowrap font-heading font-bold text-center uppercase border border-border flex items-center justify-between'>
            <button
              aria-label={`go back to ${"test"}`}
              onClick={() => setSubMenuOpen(false)}
            >
              <ChevronLeftIcon className='h-4 w-5 text-gray-500' />
            </button>
            <span>GBP</span>
            <img
              src={currentCountry?.image}
              alt={currentCountry?.countryName}
              width={25}
              height={25}
              loading='lazy'
            />
          </div>
          <ul>
            {countryOptions.map((country) => (
              <li
                key={country.label}
                onClick={() => setStoreCookie(country.store)}
              >
                <a
                  href={`${country.path}/${pagePath}`}
                  suppressHydrationWarning
                  className='text-[13px] font-normal p-[15px] border-b flex items-center'
                >
                  <span>
                    {country.currency}
                    {country.label.split(" ")[0]}
                  </span>
                  <img
                    src={country.image}
                    alt=''
                    width={25}
                    height={25}
                    className='ml-auto mr-2'
                    loading='lazy'
                  />
                  <ChevronRightIcon className='h-4 w-5 text-gray-500' />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
