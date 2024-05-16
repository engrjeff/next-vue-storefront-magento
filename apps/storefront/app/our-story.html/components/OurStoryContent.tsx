/* eslint-disable @next/next/no-img-element */

import Container from "@/components/Container";
import { envVars } from "@/lib/env-vars";

function OurStoryContent() {
  return (
    <Container className='space-y-8 lg:space-y-11'>
      <div className='flex flex-col-reverse gap-10 lg:flex-row mt-[30px]'>
        <div>
          <h2 className='text-center text-xl mt-2 mb-[25px]'>
            Hey, We&apos;re Showpo
          </h2>
          <h3 className='text-center lg:text-left text-[15px] mb-5'>
            What we are about?
          </h3>
          <p className='mb-5 text-[15px] text-center lg:text-left'>
            Showpo is all about having fun with fashion & celebrating
            individuality. Our mission is to empower everyone to look & feel
            confident, whatever the occasion. Creating memorable moments where
            you can stand out, feel confident & express yourself through style
            is at the core of everything we do.
          </p>
          <p className='mb-5 text-[15px] text-center lg:text-left'>
            From a small Australian start up to a global fashion brand, we aim
            to empower our customers. We value body positivity & individuality,
            and are committed to offering an inclusive range of a wide range of
            styles, designed exclusively in Australia.
          </p>
          <h2 className='text-center text-xl mt-2 mb-[25px]'>
            We are fashion for the fun-spirited
          </h2>
        </div>
        <div>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw9c765915/images/our_story/Landing_Page_Top_Banner_3.jpg'
            alt='Our story showpo'
            className='h-full object-cover'
            loading='lazy'
          />
        </div>
      </div>
      <div className='grid gap-8 lg:grid-cols-2'>
        <div className='flex justify-center'>
          <img
            src={`${envVars.STORE_PATH}/images/our-story-jane-lu.jpeg`}
            alt='Our story showpo'
            className='h-full w-full object-cover'
            loading='lazy'
          />
        </div>
        <div>
          <h2 className='text-xl mb-4'>Our Story</h2>
          <p className='mb-4 text-[15px]'>
            Founded in Sydney in 2010, our CEO Jane Lu ditched her corporate
            accounting job to start a fashion brand. After her business partner
            said ‘no one will ever shop online’, Jane took a chance on Showpo
            and changed the retail game. What was once a garage start-up quickly
            turned global ecommerce fashion destination, Like Showpo itself,
            Jane has always been a trailblazer & stood for being your authentic
            self which is embedded in the ethos of Showpo.
          </p>
          <p className='mb-4 text-[15px]'>
            13 years on, Showpo is now a team with over 100 employees. A largely
            female-lead business, we live by a get sh*t done mentality and still
            have the hustle of that small garage start up. From Jane’s vision,
            Showpo has taken the industry by storm, boasting over 3.5 million
            followers across social media platforms and shipping to countries
            worldwide.
          </p>
        </div>
      </div>
      <div className='flex flex-col-reverse gap-10 lg:flex-row'>
        <div>
          <h2 className='text-center text-xl mt-2 mb-[25px]'>
            Big Brand Energy
          </h2>
          <p className='mb-5 text-[15px]'>
            Showpo was one of the first online retailers to offer inclusive
            sizing, ranging from size 4-20 (US 0-16).
          </p>
          <p className='mb-5 text-[15px]'>
            From chic feminine day dresses to affordable bridal gowns, we cater
            to every customer, for every occasion.
          </p>
          <p className='mb-5 text-[15px]'>
            We are committed to offering a wide range of fresh and exciting new
            product weekly and with great attention to fits, quality fabrics,
            unique prints & statement pieces, there is sure to be something for
            everyone.
          </p>
        </div>
        <div>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwe2133b43/images/our_story/Landing_Page_Bottom_Banner_2.jpg'
            alt='Our story showpo'
            className='h-full object-cover'
            loading='lazy'
          />
        </div>
      </div>
    </Container>
  );
}

export default OurStoryContent;
