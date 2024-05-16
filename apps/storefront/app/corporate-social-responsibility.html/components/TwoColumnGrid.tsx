import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

function TwoColumnGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid lg:grid-cols-2 gap-5 lg:gap-10 pb-5", className)}>
      {children}
    </div>
  );
}

function First({ children }: { children: ReactNode }) {
  return <div className='lg:order-1'>{children}</div>;
}

function Second({ children }: { children: ReactNode }) {
  return <div className='lg:order-2'>{children}</div>;
}

TwoColumnGrid.First = First;
TwoColumnGrid.Second = Second;

export default TwoColumnGrid;
