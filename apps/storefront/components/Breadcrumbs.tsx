"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

interface BreadcrumbsProps extends React.ComponentPropsWithoutRef<"ul"> {}

function Breadcrumbs({ className, children, ...props }: BreadcrumbsProps) {
  return (
    <ul
      role='navigation'
      className={cn("flex space-x-1.5", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

type BreadcrumbItemProps =
  | {
      children: React.ReactNode;
      href: string;
      order?: undefined;
      className?: string;
    }
  | {
      children: React.ReactNode;
      order: "last";
      className?: string;
    };

function BreadcrumbItem({
  children,
  className,
  ...props
}: BreadcrumbItemProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (props.order === "last") {
    return (
      <li>
        <Link
          href={`${pathname}?${searchParams?.toString()}`}
          className={cn("text-xs uppercase font-bold", className)}
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={props.href}
        className={cn("text-xs uppercase font-normal", className)}
      >
        {children}
      </Link>
    </li>
  );
}

function BreadcrumbSeparator({ separator = "/" }: { separator?: string }) {
  return <span aria-hidden='true'>{separator}</span>;
}

export { BreadcrumbItem, BreadcrumbSeparator, Breadcrumbs };
