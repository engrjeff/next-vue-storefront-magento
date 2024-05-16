/* eslint-disable @next/next/no-img-element */

import Container from "@/components/Container";

function JoinUsLink() {
  return (
    <Container className='px-0 xl:px-4 pb-20 md:pb-[140px] md:pt-16 max-w-[1440px]'>
      <a href='https://www.linkedin.com/company/showpo/jobs?trk=nav_type_jobs'>
        <img
          src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwfe60440b/images/our_story/about-us-desktop.jpg'
          alt='our story join us banner'
          className='hidden md:inline max-w-full'
          loading='lazy'
        />
        <img
          src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw48bb5f1e/images/our_story/about-us-mobile.jpg'
          alt='our story join us banner'
          className='inline md:hidden max-w-full'
          loading='lazy'
        />
      </a>
    </Container>
  );
}

export default JoinUsLink;
