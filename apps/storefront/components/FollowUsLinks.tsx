import { envVars } from "@/lib/env-vars";

/* eslint-disable @next/next/no-img-element */
const socialLinks = [
  {
    icon: `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-facebook.svg`,
    href: "https://www.facebook.com/iloveshowpo",
  },
  {
    icon: `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-instagram.svg`,
    href: "https://www.instagram.com/showpo/",
  },
  {
    icon: `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-pinterest.svg`,
    href: "https://www.pinterest.com.au/iloveshowpo/",
  },
  {
    icon: `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-youtube.svg`,
    href: "https://www.youtube.com/c/ShowpoChannel",
  },
  {
    icon: `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-linkedin.svg`,
    href: "https://www.linkedin.com/company/showpo/",
  },
  {
    icon: `${envVars.SHOWPO_MEDIA_URL}/media/footer/footer-tiktok.svg`,
    href: "https://www.tiktok.com/@showpo",
  },
];

export function FollowUsLinks() {
  return (
    <div className='h-[29.5px] flex items-center box-content p-[15px] align-top lg:p-0 lg:pb-4 leading-normal border-b lg:border-none space-x-4 text-[#8c8c8c]'>
      <span className='font-sans text-[15px] font-bold uppercase'>
        Follow Us
      </span>
      <div className='flex items-start space-x-3'>
        {socialLinks.map((social) => (
          <a key={social.href} href={social.href} target='_blank'>
            <img src={social.icon} alt='' />{" "}
            <span className='sr-only'>Go to {social.href}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
