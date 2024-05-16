/* eslint-disable @next/next/no-img-element */
"use client";

import { envVars } from "@/lib/env-vars";
import { countryOptions } from "@/lib/options";
import { setStoreCookie } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Popover from "@radix-ui/react-popover";
import { usePathname } from "next/navigation";

interface CountryPickerProps {
  forFooter?: boolean;
}

export function CountrySelector({ forFooter }: CountryPickerProps) {
  const pathname = usePathname();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className='inline-flex items-center gap-1.5 outline-none min-w-[47px] h-[31.5] pt-0.5'>
          <span>
            <img
              src={`${envVars.SHOWPO_MEDIA_URL}/media/wysiwyg/flags/flag-uk.png`}
              alt='uk flag'
              width={25}
              height={25}
              loading='lazy'
            />
          </span>
          {forFooter ? (
            <span className='text-[15px]'>United Kingdom</span>
          ) : null}
          <ChevronDownIcon className='w-2.5 h-2.5' />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align='end'
          sideOffset={10}
          className='z-20 min-w-[135px] bg-white border border-[#bbbbbb] flex flex-col font-normal'
        >
          <ul>
            {countryOptions.map((country) => (
              <li
                key={country.label}
                onClick={() => setStoreCookie(country.store)}
              >
                <a
                  href={
                    pathname === undefined
                      ? `${country.path}`
                      : `${country.path}${pathname}`
                  }
                  className='text-[13px] p-2 border-b border-[#d1d1d1] flex items-center hover:outline-none hover:bg-[#e8e8e8]'
                >
                  <span>
                    <img
                      src={country.image}
                      alt={country.countryName}
                      width={25}
                      height={25}
                      className='mr-2.5'
                      loading='lazy'
                    />
                  </span>{" "}
                  <span className='text-[13px] font-light'>
                    {country.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
