/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";
import { envVars } from "@/lib/env-vars";
import { type Metadata } from "next";
import { CTALink } from "./components/CTALink";
import TwoColumnGrid from "./components/TwoColumnGrid";

export const metadata: Metadata = {
  title: "Corporate, Social & Environmental Responsibility",
};

function CorporateSocialResponsibilityPage() {
  return (
    <main>
      <section
        className='flex h-[356px] w-full items-center justify-center bg-cover bg-no-repeat px-4'
        style={{
          backgroundImage: `url(https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw7251c6f5/images/csr/sustainability_csr@3x.webp)`,
        }}
      >
        <h1 className='text-center text-2xl font-bold uppercase text-white'>
          Corporate, Social & <br />
          Environmental Responsibility
        </h1>
      </section>
      <Container className='mb-20 mt-10 px-4 font-light max-w-[1100px] text-justify'>
        <p className='text-[15px] mb-6'>
          At Showpo we believe that fashion is for everyone. Fashion is a form
          of self expression that should be fun and inspiring! We want to
          provide our customers with on trend, fashionable products that are
          both size & price inclusive.
        </p>
        <p className='text-[15px] mb-6'>
          We understand that the nature of fast fashion poses a number of risks
          to both the workers in our supply chain & the natural environment that
          we operate in. We aim to reduce these risks and make more conscious
          choices where we can.
        </p>
        <h3 className='text-[15px] normal-case mb-2'>Our Supply Chain</h3>
        <p className='text-[15px] mb-6'>
          Our products come from two different sources of supply, our own
          branded product (80%) and external branded products (20%). We
          understand the risks of multiple sources of supply and the added level
          of uncertainty to our operations which this adds. Whilst the majority
          of our work focuses on our own branded products, we do expect our
          branded supplier partners to meet the same standards.
        </p>
        <TwoColumnGrid className='mt-[60px] mb-10'>
          <TwoColumnGrid.First>
            <img
              src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwcb152a9f/images/csr/ethical-sourcing-csr@2x.webp'
              alt='Showpo UK ethical sourcing'
              loading='lazy'
            />
          </TwoColumnGrid.First>
          <TwoColumnGrid.Second>
            <h3 className='mb-3 text-xl uppercase'>Ethical Sourcing</h3>
            <p className='text-[15px] mb-5 text-justify'>
              Ethical Sourcing covers all aspects of our supply chain and is our
              responsibility to ensure that at each touchpoint of the process,
              the rights of the workers involved and the environmental impacts
              are considered. We have a responsibility to our customers to
              ensure that we know where our goods are produced, who by and under
              what conditions.
            </p>
            <CTALink
              href={`${envVars.SHOWPO_MEDIA_URL}/ethical-sourcing.html`}
              target='_blank'
            >
              Learn More
            </CTALink>
          </TwoColumnGrid.Second>
        </TwoColumnGrid>
        <TwoColumnGrid className='mt-[60px] mb-10'>
          <TwoColumnGrid.Second>
            <img
              src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwe73aee47/images/csr/enviromental-woven-csr@2x.webp'
              alt='Showpo UK Environmental Footprint'
              loading='lazy'
            />
          </TwoColumnGrid.Second>
          <TwoColumnGrid.First>
            <h3 className='mb-3 text-xl uppercase'>Environmental Footprint</h3>
            <p className='text-[15px] mb-5 text-justify'>
              We know that the fast fashion model poses substantial risks to the
              environment and we endeavour to make better choices wherever
              possible to reduce our negative impact.
            </p>
            <CTALink
              href={`${envVars.SHOWPO_MEDIA_URL}/environmental-footprint.html`}
              target='_blank'
            >
              Learn More
            </CTALink>
          </TwoColumnGrid.First>
        </TwoColumnGrid>

        <TwoColumnGrid className='mt-[60px] mb-10'>
          <TwoColumnGrid.First>
            <img
              src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw4349781d/images/csr/the-hunger-project.jpg'
              alt='Showpo UK Philanthropy'
              loading='lazy'
            />
          </TwoColumnGrid.First>
          <TwoColumnGrid.Second>
            <h3 className='mb-3 text-xl uppercase'>Philanthropy</h3>
            <p className='text-[15px] mb-5 text-justify'>
              As a company who uplifts, we also support. Our philanthropy
              actions to date have been based on where we can make the most
              impact. The partnerships we have created with our chosen
              organisations have allowed us to support and give back to
              communities and individuals who are in need. As a company, we view
              philanthropy as a responsibility, one that we continuously strive
              to achieve.
            </p>
            <CTALink
              href={`${envVars.SHOWPO_MEDIA_URL}/philanthropy.html`}
              target='_blank'
            >
              Learn More
            </CTALink>
          </TwoColumnGrid.Second>
        </TwoColumnGrid>

        <TwoColumnGrid className='mt-[60px] pb-0'>
          <TwoColumnGrid.Second>
            <img
              src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw75ec2c88/images/csr/csr-diversity.jpg'
              alt='Showpo UK Diversity, Equity & Inclusion'
              loading='lazy'
            />
          </TwoColumnGrid.Second>
          <TwoColumnGrid.First>
            <h3 className='mb-3 text-xl uppercase'>
              Diversity Equity & Inclusion
            </h3>
            <p className='text-[15px] mb-5 text-justify'>
              At Showpo we are committed to fostering an environment where
              everyone can belong and be their authentic selves. We strive to
              craft a culture that reflects the diversity of our audience, where
              our differences make us stronger and help us become better humans.
              We celebrate our people and support them, ensuring we’re a
              workplace welcoming to all, where everyone can bring their whole
              selves to work. We are on a journey and sometimes might make
              mistakes, but we are committed to learning, growing and backing up
              these words with positive action.
            </p>
            <CTALink
              href={`${envVars.SHOWPO_MEDIA_URL}/environmental-footprint.html`}
              target='_blank'
            >
              Learn More
            </CTALink>
          </TwoColumnGrid.First>
        </TwoColumnGrid>
      </Container>
    </main>
  );
}

export default CorporateSocialResponsibilityPage;
