/* eslint-disable @next/next/no-img-element */

import { LinkChip } from "@/components/LinkChip";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jane Lu (CEO)",
};

function JaneLuPage() {
  return (
    <main className='container max-w-[1070px] mt-20 space-y-20 px-4'>
      <section className='grid lg:grid-cols-12 gap-5'>
        <div className='lg:col-span-4 px-2'>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw0d925b8b/images/jane-lu/About-Jane_Banner.jpg'
            alt='photo of Jane Lu'
            className='w-full'
          />
        </div>
        <div className='lg:col-span-8'>
          <blockquote className='px-8 py-4 bg-[#f4f4f4] mb-10'>
            <p className='italic mb-3'>
              "I could've taken the safe option, but I didn't want to be
              mediocre in a job I didn't love. I had to take a chance on
              myself…"
            </p>
            <footer>
              — <cite className='not-italic'>Jane Lu, 2022</cite>
            </footer>
          </blockquote>

          <div>
            <h2 className='mb-4 font-extrabold text-xl uppercase'>
              Meet Jane Lu
            </h2>
            <div className='font-light text-[15px] space-y-2'>
              <p>
                The visionary behind Showpo, the global fashion brand, capturing
                the heart of millions of customers globally.
              </p>
              <p>
                In 2010, Jane faced numerous obstacles, including a mountain of
                debt, a failed business, and unemployment. Despite these
                challenges, Jane refused to let them get in the way of her
                dreams. She secretly quit her corporate job to start a business,
                and put on a suit everyday to pretend to her parents that she
                was still working as an accountant.
              </p>
              <p>
                Fast forward thirteen years to today, and Jane's hard work has
                paid off. Showpo is known worldwide for its trendy and
                affordable clothing that has a set mission to empower women
                everywhere. Alongside this, Jane has launched her the Lazy Ceo’s
                guide to starting & growing an online business online
                masterclass, The Lazy Ceo Podcast and is a part of the panel of
                Shark Tank Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='grid lg:grid-cols-12 gap-5'>
        <div className='lg:col-span-7 order-1 lg:-order-1'>
          <h2 className='text-xl font-extrabold uppercase mb-4'>
            The Showpo Story
          </h2>
          <div className='text-[15px] font-light space-y-2'>
            <p>
              Jane had started out in the corporate world as an accountant, but
              realised the 9-5 cubicle life wasn't her jam. With her enthusiasm
              for entrepreneurship, she quit, and started a business running
              pop-up stores selling products from emerging designers.
            </p>
            <p>
              It eventually folded, leaving her jobless and broke (and her
              parents none the wiser). But she wasn't put off. A month later,
              she launched Showpo.
            </p>

            <p>
              What started with a laptop and two shelves of clothing in her
              parents' garage in Sydney is now a global fashion force, offering
              thousands of trend-driven styles, from clothes to accessories, and
              shipping to more than 120 countries.
            </p>
            <p>
              Jane's social media savvy also made Showpo a disrupter in the
              retail scene. A keen user herself, she leveraged platforms like
              Facebook before many others did. This strategy paid off, and then
              some. Today, Showpo has over three million followers globally
              across its social media platforms.
            </p>
            <p>
              They love Showpo for its fun and inclusive mission statement:
              'fashion for everyone'.
            </p>
          </div>
        </div>
        <div className='lg:col-span-5'>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw56ba53d1/images/jane-lu/About-Jane_Banner3.jpg'
            alt='showpo'
            className='w-full'
            loading='lazy'
          />
        </div>
      </section>

      <section className='grid lg:grid-cols-12 gap-5'>
        <div className='lg:col-span-7 order-1 lg:-order-1'>
          <h2 className='text-xl font-extrabold uppercase mb-4'>
            The Lazy CEO
          </h2>

          <div className='text-[15px] font-light space-y-2'>
            <p>
              After more than a decade, Jane's social media handle, The Lazy
              CEO, still captures who she is. A fan of working smart, not hard,
              her ethos is one that Bill Gates once put well: "I choose a lazy
              person to do a hard job. Because a lazy person will find an easy
              way to do it."
            </p>
            <p>
              To learn more from Jane and her journey, follow her business
              course on:
            </p>
            <div className='m-2'>
              <LinkChip
                href='https://www.thelazyceo.com/'
                icon='lazy-ceo'
                label='thelazyceo.com'
              />
            </div>
            <p>Follow Jane on social media:</p>
            <div className='grid grid-cols-2 justify-items-center lg:grid-cols-4 gap-3 m-2'>
              <LinkChip
                href='https://www.tiktok.com/@thelazyceo'
                icon='instagram'
                label='@thelazyceo'
              />
              <LinkChip
                href='https://www.tiktok.com/@thelazyceo'
                icon='tiktok'
                label='@thelazyceo'
              />
              <LinkChip
                href='https://www.youtube.com/thelazyceo'
                icon='youtube'
                label='/thelazyceo'
              />
              <LinkChip
                href='https://www.facebook.com/thelazyceo'
                icon='facebook'
                label='/thelazyceo'
              />
            </div>
          </div>
        </div>
        <div className='lg:col-span-5'>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwbd7b8218/images/jane-lu/About-Jane_Banner2.jpg'
            alt='the lazy ceo'
            className='w-full'
            loading='lazy'
          />
        </div>
      </section>

      <section className='grid lg:grid-cols-12 gap-5'>
        <div className='lg:col-span-5'>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw510ebdd7/images/jane-lu/lazy-ceo-podcast-mobile.png'
            alt='showpo'
            loading='lazy'
          />
        </div>
        <div className='lg:col-span-7'>
          <h2 className='text-xl font-extrabold uppercase mb-4'>
            The Lazy CEO Podcast
          </h2>
          <div className='text-[15px] font-light space-y-2'>
            <p>
              Conversations with the entrepreneurs behind some of the most
              iconic brands we all know and love. They’ll be sharing their
              stories of how they started and built these incredible brands and
              sharing the lessons they’ve learnt along the way.
            </p>
            <p>
              But this isn’t just a business podcast, this is also about
              mindset, personal development being your best self. So wherever
              you are on your journey, I want you to feel inspired, empowered
              and entertained.
            </p>
            <p>Listen Now:</p>
            <div className='m-2'>
              <LinkChip
                href='https://www.thelazyceo.com/'
                icon='lazy-ceo'
                label='thelazyceo.com'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='grid lg:grid-cols-12 gap-5'>
        <div className='lg:col-span-7 order-1 lg:-order-1'>
          <h2 className='text-xl font-extrabold uppercase mb-4'>
            Jane's Impact
          </h2>
          <div className='text-[15px] font-light space-y-2'>
            <p>
              Despite the CEO status, Jane has never taken herself too
              seriously; she's always believed work should be fun - and shared
              with a passionate, like-minded team.
            </p>
            <p>
              A big focus of her career is promoting entrepreneurship and women
              in business. A role model to aspiring entrepreneurs worldwide, she
              regularly talks up the importance of learning through mistakes,
              and following your own path unapologetically.
            </p>
            <p>
              In 2015, she co-founded{" "}
              <a
                href='https://www.facebook.com/groups/LMBDW'
                target='_blank'
                className='underline'
              >
                Like Minded Bitches Drinking Wine
              </a>
              , a Facebook group and website for female entrepreneurs and
              business owners to bond over their experiences. The community has
              since grown to more than 167,000 members, with meetup events held
              around the world which includes Bitchcon - a conference hosted by
              the Like Minded Bitches Drinking Wine.
            </p>
            <p>
              She is also known for her numerous media and public speaking
              appearances, in Australia and internationally, and her active
              support of the local startup scene.
            </p>
          </div>
        </div>
        <div className='lg:col-span-5'>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw4ffa5a51/images/jane-lu/LMBDW-Banner.jpg'
            alt='showpo'
            loading='lazy'
          />
        </div>
      </section>

      <section className='grid lg:grid-cols-12 gap-5'>
        <div className='lg:col-span-5'>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwa0638696/images/jane-lu/Shark-Tank-Banner.jpg'
            alt='showpo'
            loading='lazy'
          />
        </div>
        <div className='lg:col-span-7'>
          <h2 className='text-xl font-extrabold uppercase mb-4'>
            On The Horizon For Jane
          </h2>
          <div className='text-[15px] font-light space-y-2'>
            <p>
              She is also known for her numerous media and public speaking
              appearances, in Australia and internationally, and her active
              support of the local startup scene. Now including Shark Tank
              Australia as she is part of the panel of Sharks that help aspiring
              entrepreneurs from all over Australia. Jane is accompanied by
              Sabri Suby, Dr. Catriona wallace and Davie Fogarty alongside
              Robert Herjavec whom all have unique backgrounds and expertise
              airing on Channel 10.
            </p>
            <div>
              <LinkChip
                icon='sharktank'
                label='Watch Here'
                href='https://10play.com.au/shark-tank'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='grid lg:grid-cols-12 gap-5'>
        <div className='lg:col-span-5'>
          <img
            src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw03963fce/images/jane-lu/Awards-Banner.jpg'
            alt='showpo'
            loading='lazy'
          />
        </div>
        <div className='lg:col-span-6'>
          <h2 className='text-xl font-extrabold uppercase mb-4'>
            Awards & Accolades
          </h2>
          <div className='text-[15px] font-light space-y-2'>
            <p>
              Jane and the Showpo team are proud to have won awards for their
              work. See a selection here.
            </p>
            <ul className='list-disc pl-6 space-y-1'>
              {accolades.map((accolade, index) => (
                <li key={`jane-lu-accolades-${index + 1}`}>{accolade}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-xl font-extrabold uppercase mb-4'>Press & Media</h2>
        <p className='text-[15px] font-light mb-8'>
          Jane's story has received media coverage around the world. Explore a
          selection of highlights below.
        </p>
        <h3 className='text-[15px] font-extrabold uppercase mb-4'>Read</h3>
        <ul className='list-disc pl-6'>
          {pressAndMedia.map((link, index) => (
            <li key={`jane-lu-press-media-${index + 1}`}>
              <a href={link.href} className='underline text-[15px] font-light'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className='text-xl font-extrabold uppercase mb-4'>
          Listen And Watch
        </h2>
        <ul className='list-disc pl-6'>
          {listenAndWatch.map((link, index) => (
            <li key={`jane-lu-listen-watch-${index + 1}`}>
              <a href={link.href} className='text-[15px] underline font-light'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className='pb-20 flex items-center justify-center lg:justify-end'>
        <Link
          href='/our-story.html'
          className='border w-full xl:w-auto flex items-center gap-3 justify-center border-black uppercase font-bold px-[18px] font-heading py-4 text-[11px] transition-colors hover:bg-[#f5f5f5]'
        >
          Read More About Showpo's Story{" "}
          <ChevronRightIcon className='h-3 w-3 -mt-0.5 text-black' />
        </Link>
      </div>
    </main>
  );
}

export default JaneLuPage;

const accolades = [
  "Top Social Retailer - Power Retail All Star Bash Awards 2022",
  "Top User Experience - Power Retail All Star Bash Awards 2022",
  "Top Social Retailer - Power Retail All Star Bash Awards 2021",
  "#3 Top 50 People in eCommerce - Inside Retail 2020",
  "Top Social Retailer - Power Retail All Star Bash Awards 2020",
  "Top Social Retailer - Power Retail All Star Bash Awards 2019",
  "Top Marketing Initiative - Power Retail All Star Bash Awards 2019",
  "Hall of Fame Inductee - Online Retail Industry Awards (ORIAS) 2019",
  "Best Pureplay Retailer - ORIAS 2019",
  "Technology Champion - ORIAS 2019",
  "Excellence in International Fulfilment - Retail Fulfilment Awards 2018",
  "Top Social Retailer - Power Retail All Star Bash Awards 2018",
  "#5 in Top 100 Retailers - Power Retail All Star Bash Awards 2018",
  "Online Retailer of the Year - ORIAS 2018",
  "Best International Conqueror - ORIAS 2018",
  "Best Site Optimisation & Design - ORIAS 2018",
  "Best Social Commerce Initiative - ORIAS 2018",
  "Most Viewed Fashion Professionals in Australia - LinkedIn 2017",
  "30 Under 30 Asia - Forbes 2016",
  "Entrepreneur of the Year - Cosmopolitan 2015",
  "#35 Fast Starters List - BRW 2014",
  "Finalist - EY Entrepreneur of the Year Awards 2014",
  "Australian Small Business Championship 2012",
  "Sydney Business Award Finalist 2012-2011",
];

const pressAndMedia = [
  {
    href: "https://www.who.com.au/who-is-jane-lu-showpo/",
    label:
      "Jane Lu on Starting Showpo and “Shark Tank Australia” - Pop Sugar - 2023 Who is Jane Lu - Who - 2023",
  },
  {
    href: "https://www.smartcompany.com.au/entrepreneurs/shark-tank-judge-showpo-founder-launches-online-course-business/",
    label:
      "Shark Tank Australia: Channel Ten announces premiere date for reboot of the show - with The Oodie tycoon, a tech guru and fashion queen as the new 'Sharks’ - Daily Mail - 2023",
  },
  {
    href: "https://www.smartcompany.com.au/entrepreneurs/shark-tank-judge-showpo-founder-launches-online-course-business/",
    label:
      "Shark Tank judge and Showpo founder Jane Lu launches online course on how to start an online business - Smart Company - 2023",
  },
  {
    href: "https://www.goodmorningamerica.com/shop/story/friday-favorites-jane-lu-balances-motherhood-multimillion-dollar-97261946",
    label:
      "How Jane Lu Balance motherhood and a multimillion-dollar fashion empire - Good Morning America - 2023",
  },
  {
    href: "https://www.today.com/video/showpo-ceo-jane-lu-shares-how-she-secretly-created-her-fashion-business-134318149723/",
    label:
      "CEO shares journey of ditching corporate job to follow her passion for fashion - Today - 2022",
  },
  {
    href: "https://www.dailymail.co.uk/femail/article-10063341/Showpo-founder-Jane-Lu-reveals-built-multi-million-dollar-empire-parents-garage.html",
    label:
      "Showpo Founder Jane Lu Reveals How She Went From Student Accountant, 'Broke' and Selling Clothes Out of Her Parents' Garage to CEO of a Multi-Million Dollar Fashion Empire, Daily Mail - 2021",
  },
  {
    href: "https://powerretail.com.au/case-profiles-studies/showpos-post-lockdown-glow-up-and-plans-for-global-domination/",
    label:
      "Showpo's Post Lockdown Glowup and Plans for Global Domination, Power Retail - 2021",
  },
  {
    href: "https://powerretail.com.au/news/showpos-ceo-acknowledge-mistakes/",
    label: "Showpo's CEO Acknowledges Her Mistakes, Power Retail - 2018",
  },
  {
    href: "https://www.forbes.com/sites/ranawehbe/2016/06/28/forbes-under-30-summit-asia-highlights-from-inspiration-and-drive-presentation-by-jane-lu/?sh=63acc9221cce",
    label:
      "Forbes Under 30 Summit Asia: Highlights from 'Inspiration and Drive' Presentation by Jane Lu, Forbes Asia - 2016",
  },
  {
    href: "https://www.facebook.com/watch/?v=10150644349649978",
    label: "Australia's All Women Start Up Club, The Australian - 2016",
  },
  {
    href: "https://www.news.com.au/lifestyle/fashion/people/showpo-one-of-australias-biggest-and-fastestgrowing-online-fashion-retailers-breaks-into-the-us-market-with-its-first-store-in-la/news-story/cb00c7b7b14e02d283a36dadcab47f9f",
    label:
      "Showpo, One of Australia's Biggest and Fastest-Growing Online Fashion Retailers, Breaks Into the US Market With Its First Store in LA, news.com.au - 2016",
  },
];

const listenAndWatch = [
  {
    href: "https://www.today.com/video/showpo-ceo-jane-lu-shares-how-she-secretly-created-her-fashion-business-134318149723",
    label:
      "CEO Shares Journey of Ditching Corporate Job To Follow Her Passion for Fashion - The Today Show - 2022",
  },
  {
    href: "https://cub.club/podcast/jane-lu-building-a-fashion-empire/",
    label: "Building a Fashion Empire - Catching Up with Cub Podcast - 2022",
  },
  {
    href: "https://www.afr.com/wealth/people/listen-now-how-i-made-it-episode-2-20211016-p590kj",
    label: "How I Made It - The Financial Review Podcast - 2021",
  },
  {
    href: "https://omny.fm/shows/lady-startup/lady-startup-ep-1-jane-lu-final-edit",
    label: "Lady Startup Podcast - 2018",
  },
];
