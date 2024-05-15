import { cn } from "@/lib/utils";
import Link from "next/link";

interface LinkProps extends React.ComponentProps<typeof Link> {
  as: "link";
}

interface ButtonProps extends React.ComponentProps<"button"> {
  as: "button";
}

type MWebMenuItemProps = LinkProps | ButtonProps;

export function MWebMenuItem({
  children,
  className,
  ...props
}: MWebMenuItemProps) {
  const classes = cn(
    "px-4 h-16 uppercase w-full flex items-center text-[11px] font-bold font-heading bg-[#f4f4f4]",
    className
  );

  if (props.as === "button") {
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  }

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
