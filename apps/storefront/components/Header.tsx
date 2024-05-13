import { AccountMenu } from './AccountMenu';
import { Cart } from './Cart';
import Container from './Container';
import { LogoWithLink } from './LogoWithLink';
import { MWebMenu } from './MWebMenu';

export function Header() {
  return (
    <>
      <Container className="lg:pb-[11px] lg:pt-[11px] h-[49px] lg:h-[73.5px]">
        <div className="pt-[11px]"></div>
        <div className="flex items-center xl:items-start justify-between xl:justify-end gap-4 relative">
          <MWebMenu>
            <div>MWeb Menu here</div>
          </MWebMenu>
          <LogoWithLink />
          <div className="flex gap-0 xl:gap-2 pr-0.5">
            <AccountMenu />
            <Cart />
          </div>
        </div>
      </Container>
    </>
  );
}
