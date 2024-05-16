/* eslint-disable @next/next/no-img-element */

import { envVars } from "@/lib/env-vars";
import Container from "./Container";
import { DownloadOurApp } from "./DownloadOurApp";
import { FollowUsLinks } from "./FollowUsLinks";
import {
  FooterCountryPicker,
  FooterCountryPickerMweb,
} from "./FooterCountryPicker";
import { FooterLinkGroup } from "./FooterLinkGroup";
import { NewsletterForm } from "./NewsletterForm";

const helpAndInfoLinks = [
  {
    label: "Login / Join",
    href: "/customer/account/login/",
  },
  {
    label: "Help & Contact",
    href: "/helpcentre/",
  },
  {
    label: "Size Guide",
    href: "/general-sizing-chart.html",
  },
  {
    label: "Terms and Conditions",
    href: "/terms-and-conditions/",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy/",
  },
  {
    label: "Returns Policy",
    href: "/returns-policy/",
  },
  // {
  //   label: "Student Discount",
  //   href: "/student-discount",
  // },
  {
    label: "Sitemap",
    href: "/sitemap",
  },
];

const shippingAndReturnLinks = [
  {
    label: "Shipping Information",
    href: "/shipping-info/",
  },
  {
    label: "Returns Information",
    href: "/helpcentre/returns/",
  },
  {
    label: "Order Tracking",
    href: "/order-tracking/",
  },
  {
    label: "Create a Return",
    href: "/returns",
  },
];

const aboutUsLinks = [
  {
    label: "Our Story",
    href: "/our-story.html",
  },
  { label: "Jane Lu", href: "/jane-lu.html" },
  {
    label: "Corporate Social Responsibility",
    href: "/corporate-social-responsibility.html",
  },
  // {
  //   label: "Gift cards",
  //   href: "/gift-cards",
  // },
];

const paymentMethods = [
  `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-payment-amex.jpg`,
  `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-payment-visa.jpg`,
  `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-payment-mastercard.jpg`,
  `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-payment-maestro.png`,
  `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-payment-paypal.jpg`,
  `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-payment-klarna.png`,
];

export function Footer() {
  return (
    <footer>
      <Container className='border-t border-t-[#d1d1d1] mt-[25px] mb-0 xl:my-8 lg:pt-4 px-0 lg:px-5'>
        <div className='w-full xl:hidden'>
          <NewsletterForm />
          <FollowUsLinks />
        </div>
        <div className='flex flex-col lg:flex-row'>
          <FooterCountryPickerMweb />
          <div className='w-full lg:w-1/4 xl:w-[16%]'>
            <FooterLinkGroup title='Help & Info' links={helpAndInfoLinks} />
          </div>
          <div className='w-full lg:w-1/4 xl:w-[16%]'>
            <FooterLinkGroup
              title='Shipping & Returns'
              links={shippingAndReturnLinks}
            />
          </div>
          <div className='w-full lg:w-1/4 xl:w-[16%]'>
            <FooterLinkGroup title='About Us' links={aboutUsLinks} />
          </div>
          <div className='w-full lg:w-1/4 xl:w-[16%] lg:space-y-1'>
            <FooterCountryPicker />
            <DownloadOurApp />
          </div>
          <div className='hidden xl:block flex-1'>
            <NewsletterForm />
            <FollowUsLinks />
          </div>
        </div>
      </Container>

      <div className='bg-[#f4f4f4]'>
        <Container className='px-5 py-[25px]'>
          <div className='grid gap-4 lg:grid-cols-3'>
            <ul className='flex w-full justify-center gap-3 lg:justify-start'>
              {paymentMethods.map((payment, i) => (
                <li key={`payment-method-${i + 1}`}>
                  <img
                    loading='lazy'
                    src={payment}
                    alt={payment}
                    width={30}
                    height={18.75}
                    className='object-cover'
                  />
                </li>
              ))}
            </ul>
            <p className='lg:col-span-2 text-center lg:text-left text-[15px] w-full font-light'>
              ABN: 96 637 850 983. Copyright © 2024 Showpo™ all rights
              reserved Show Pony Group International Pty Ltd
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
