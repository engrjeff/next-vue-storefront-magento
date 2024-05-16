import { envVars } from "@/lib/env-vars";
import { MWebMenuItem } from "./MWebMenuItem";

export function MWebMenuPageLinks() {
  return (
    <>
      <MWebMenuItem as='link' href={"/helpcentre/"}>
        Help & Contact
      </MWebMenuItem>
      <MWebMenuItem as='link' href={envVars.RETURNS_URL} target='_blank'>
        Returns
      </MWebMenuItem>
      <MWebMenuItem as='link' href={"/shipping-info/"}>
        Shipping
      </MWebMenuItem>
    </>
  );
}
