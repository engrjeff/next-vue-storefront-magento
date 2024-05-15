import { Suspense } from "react";
import { AccountMenu } from "./AccountMenu";
import { Cart } from "./Cart";
import Container from "./Container";
import { CustomerWishlist } from "./CustomerWishlist";
import { LogoWithLink } from "./LogoWithLink";
import { MWebMegamenu } from "./MWebMegamenu";

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
            <AccountMenu />
            <CustomerWishlist />
            <Cart />
          </div>
        </div>
      </Container>
    </>
  );
}
