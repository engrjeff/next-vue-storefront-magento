/* eslint-disable @next/next/no-img-element */
import Container from "@/components/Container";

const brandLogos = [
  "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw5f380d5f/images/our_story/logo-amalie@3x.png",
  "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwd0e0c4e3/images/our_story/logo-levis@3x.png",
  "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw9c7d1ac1/images/our_story/logo-runaway@3x.png",
  "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw96acef6d/images/our_story/logo-lioness@3x.png",
  "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwcc7b292f/images/our_story/logo-4th-and-reckless@3x.png",
  "https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dw880e3099/images/our_story/logo-billini@3x.png",
];

function OurBrands() {
  return (
    <section className='bg-[#f8f8f8]'>
      <Container className='container max-w-screen-lg px-4 py-[60px]'>
        <div className='grid gap-6 lg:grid-cols-2 lg:gap-10'>
          <div>
            <h2 className='text-xl'>Our Brands</h2>
            <p className='mb-4 text-[15px]'>
              We exist to be your go-to place to shop. With over 50+ new styles
              dropping weekly, our exclusive in-house designs and carefully
              curated offerings of apparel, accessories and footwear inspired by
              the latest trends have got you covered from head to toe.
            </p>
            <p className='mb-4 text-[15px]'>
              Carrying over 80+ local and international brands, you’ll find
              newness and cult classics from your favourite labels including our
              in house brand Amalie The Label and Lioness, Billini, Naked Vice,
              Peta + Jain, WeWoreWhat, Runaway the Label and more - right here
              on Showpo.
            </p>
          </div>
          <div className='grid grid-cols-2 justify-items-center gap-6 md:mx-6'>
            {brandLogos.map((brand) => (
              <div key={brand}>
                <img
                  src={brand}
                  alt={brand}
                  width={160}
                  height={74}
                  className='h-auto w-full max-w-[160px] object-cover'
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurBrands;
