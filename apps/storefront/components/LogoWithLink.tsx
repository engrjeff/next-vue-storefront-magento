import Image from "next/image";
import Link from "next/link";

export function LogoWithLink() {
  return (
    <div className='absolute inline-flex top-1.5 xl:top-2 left-10 xl:left-1/2 xl:-translate-x-1/2 xl:text-center'>
      <Link href='/' className='inline-flex xl:mb-[25px]'>
        <Image
          priority
          src={`/images/showpo_logo_v2.svg`}
          alt='Showpo UK Logo'
          width={115}
          height={27}
        />
      </Link>
    </div>
  );
}
