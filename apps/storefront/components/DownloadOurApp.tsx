/* eslint-disable @next/next/no-img-element */

import { envVars } from "@/lib/env-vars";

export function DownloadOurApp() {
  return (
    <div className='flex justify-between lg:items-start lg:justify-start lg:flex-col p-[15px] lg:p-0'>
      <p className='mb-0 font-sans lg:mb-3 inline-block text-[15px] font-bold uppercase'>
        Download Our App
      </p>
      <div className='flex gap-x-1.5 items-center lg:block'>
        <a
          aria-label='Download our app on Google Play Store'
          href='https://play.google.com/store/apps/details?id=com.showpo.showpo'
          target='_blank'
          referrerPolicy='no-referrer'
          className='mb-2 block h-7 overflow-hidden rounded'
        >
          <img
            src={`${envVars.SHOWPO_MEDIA_URL}/media/footer/google-play-badge.png`}
            alt='Download our app on Google Play Store'
            width={87}
            height={27}
            className='h-full object-cover'
            loading='lazy'
          />
        </a>
        <a
          aria-label='Download our app on App Store'
          href='https://apps.apple.com/au/app/showpo-fashion-shopping/id1387363604'
          target='_blank'
          referrerPolicy='no-referrer'
          className='mb-2 block h-7'
        >
          <img
            src={`${envVars.SHOWPO_MEDIA_URL}/media/footer/apple-store.svg`}
            alt='Download our app on App Store'
            width={87}
            height={27}
            className='h-full object-cover'
            loading='lazy'
          />
        </a>
      </div>
    </div>
  );
}
