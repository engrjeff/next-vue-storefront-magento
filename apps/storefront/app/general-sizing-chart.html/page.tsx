import type { Metadata } from "next";
import Image from "next/image";

import ConversionChart from "./components/ConversionChart";
import ShoeSizeGuide from "./components/ShoeSizeGuide";
import SizeGuideTable from "./components/SizeGuideTable";

export const metadata: Metadata = {
  title: "General Sizing Chart",
};

function GeneralSizingChartPage() {
  return (
    <main className='my-10 mx-auto space-y-10 px-[8%] xl:px-[2%] md:my-20'>
      <section className='flex flex-col items-center gap-10 md:gap-20 xl:flex-row xl:items-start'>
        <SizeGuideTable />
        <Image
          unoptimized
          loading='lazy'
          id='how-to-measure'
          src='https://www.showpo.com/on/demandware.static/-/Library-Sites-ShowpoSharedLibrary/default/dwa608fda4/images/sizingChart/Size-Guide-image.png'
          alt='Showpo UK General Sizing Chart'
          width={443}
          height={500}
          className='max-w-full object-cover'
        />
      </section>

      <ConversionChart />
      <ShoeSizeGuide />
    </main>
  );
}

export default GeneralSizingChartPage;
