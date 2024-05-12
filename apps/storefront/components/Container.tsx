import { cn } from "@/lib/utils";
import React from "react";

function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn("container w-full max-w-[1400px] mx-auto px-4", className)}
    >
      {children}
    </div>
  );
}

export default Container;
