import { Suspense } from "react";
import { AccountMenu } from "./AccountMenu";
import { Cart } from "./Cart";
import Container from "./Container";
import { CountrySelector } from "./CountrySelector";
import { CustomerWishlist } from "./CustomerWishlist";
import { LogoWithLink } from "./LogoWithLink";
import { MWebMegamenu } from "./MWebMegamenu";
import { MWebSearchBarWrapper, SearchBarWrapper } from "./SearchBarWrapper";

export function Header() {
  return (
    <>
      <Container className='lg:pb-[11px] lg:pt-[11px] h-[49px] lg:h-[73.5px]'>
        <div className='pt-[11px]'></div>
        <div className='flex items-center xl:items-start justify-between xl:justify-end gap-4 relative'>
          <Suspense>
            <MWebMegamenu />
          </Suspense>
          <LogoWithLink />
          <div className='flex gap-0 xl:gap-2 pr-0.5'>
            <div className='hidden xl:block mr-6 pl-[15px] pt-[2px] mt-[2px] ml-[2px]'>
              <Suspense>
                <SearchBarWrapper />
              </Suspense>
            </div>
            <CountrySelector />
            <div className='flex items-start -mb-1 xl:hidden'>
              <Suspense>
                <MWebSearchBarWrapper />
              </Suspense>
            </div>
            <AccountMenu />
            <CustomerWishlist />
            <Cart />
          </div>
        </div>
      </Container>
    </>
  );
}
