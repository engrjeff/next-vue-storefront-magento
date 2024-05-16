import { MWebCategories } from "./MWebCategories";
import { MWebCountrySelector } from "./MWebCountrySelector";
import { MWebLoginLink } from "./MWebLoginLink";
import { MWebMenu } from "./MWebMenu";
import { MWebLogout } from "./MWebMenuLogout";
import { MWebMenuPageLinks } from "./MWebMenuPageLinks";
import { MWebMyAccountLink } from "./MWebMyAccountLink";

export function MWebMegamenu() {
  return (
    <MWebMenu>
      <MWebCategories />
      <MWebLoginLink />
      <MWebLogout />
      <MWebMyAccountLink />
      <MWebCountrySelector />
      <MWebMenuPageLinks />
    </MWebMenu>
  );
}
