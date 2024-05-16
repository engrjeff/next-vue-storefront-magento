"use client";

import { envVars } from "@/lib/env-vars";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";

interface Props {
  title: string;
  links: { label: string; href: string }[];
}

export function FooterLinkGroup({ title, links }: Props) {
  return (
    <>
      <div className='block lg:hidden'>
        <Accordion.Root type='single' collapsible className='w-full'>
          <Accordion.Item value={title} className='[&>h3]:mb-0'>
            <Accordion.Header className='font-sans'>
              <Accordion.Trigger className='text-[15px] font-bold uppercase leading-none p-[15px] border-b w-full text-left flex items-center justify-between'>
                {title} <ChevronDownIcon className='w-2.5 h-2.5 text-black' />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <ul className='p-[15px]'>
                {links.map((link) => (
                  <li key={link.label} title={`Go to ${link.label}`}>
                    <a
                      href={`${envVars.STORE_PATH}${link.href}`}
                      className='text-[15px] font-light leading-[1.5]'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
      <div className='hidden lg:block'>
        <p className='mb-2.5 inline-block font-sans text-[15px] font-bold uppercase leading-[22px] align-top'>
          {title}
        </p>
        <ul className='mr-2'>
          {links.map((link) => (
            <li key={link.label} title={`Go to ${link.label}`}>
              <a
                href={`${envVars.STORE_PATH}${link.href}`}
                className='text-[15px] block font-light leading-[22px]'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
