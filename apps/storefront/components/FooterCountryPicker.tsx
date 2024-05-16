/* eslint-disable @next/next/no-img-element */
"use client";

import { envVars } from "@/lib/env-vars";
import { countryOptions } from "@/lib/options";
import { setStoreCookie } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";
import { usePathname } from "next/navigation";
import { CountrySelector } from "./CountrySelector";

export function FooterCountryPicker() {
  return (
    <div className='hidden lg:block p-[15px] lg:p-0 border-b lg:border-none'>
      <p className='text-[15px] font-bold uppercase font-sans mb-1'>
        Shopping From
      </p>
      <CountrySelector forFooter />
    </div>
  );
}

export function FooterCountryPickerMweb() {
  const pathname = usePathname();

  return (
    <div className='block lg:hidden'>
      <Accordion.Root type='single' collapsible className='w-full'>
        <Accordion.Item value='title' className='[&>h3]:mb-0'>
          <Accordion.Header className='font-sans'>
            <Accordion.Trigger className='text-[15px] font-bold uppercase leading-none p-[15px] border-b w-full h-[46px] text-left flex items-center justify-between'>
              Shopping From{" "}
              <span className='flex items-center gap-2'>
                <img
                  src={`${envVars.SHOWPO_MEDIA_URL}/media/wysiwyg/flags/flag-uk.png`}
                  alt='uk flag'
                  width={25}
                  height={25}
                  loading='lazy'
                />
                <ChevronDownIcon className='w-2.5 h-2.5' />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <ul className='p-[15px] text-[15px] font-normal'>
              {countryOptions.map((country) => (
                <li
                  key={country.label}
                  title={`Go to ${country.label}`}
                  onClick={() => setStoreCookie(country.store)}
                >
                  <a
                    href={
                      pathname === undefined
                        ? `${country.path}`
                        : `${country.path}${pathname}`
                    }
                    className='block h-[22px] font-light'
                  >
                    {country.countryName} - {country.literalCurrency}
                  </a>
                </li>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
