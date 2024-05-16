import { envVars } from "@/lib/env-vars";
import Image from "next/image";
import React from "react";

export function AppImage({ src, ...rest }: React.ComponentProps<typeof Image>) {
  return <Image src={`${envVars.STORE_PATH}${src}`} {...rest} />;
}
