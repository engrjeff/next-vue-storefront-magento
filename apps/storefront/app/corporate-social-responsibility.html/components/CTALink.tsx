import { cn } from "@/lib/utils";
import * as React from "react";

export const CTALink = (props: React.ComponentProps<"a">) => (
  <a
    {...props}
    className={cn(
      "hidden text-center mt-5 pt-4 px-3 pb-1.5 h-12 text-[11px] border border-black hover:bg-[#333] hover:text-white hover:border-[#007cad] transition-colors tracking-[0.85px] uppercase font-heading font-semibold min-w-[194px] w-full lg:w-auto"
    )}
  />
);
