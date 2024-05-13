import { cn } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import * as React from "react";

interface RadioFilterButtonProps {
  label: string;
  name: string;
  value: string;
}

export function RadioFilterButton({
  label,
  name,
  value,
}: RadioFilterButtonProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(() => {
    const params = new URLSearchParams(searchParams ? searchParams : undefined);

    const paramValue = searchParams?.getAll(name);

    if (paramValue?.includes(String(value))) {
      params.delete(name, value);
    } else {
      params.append(name, value);
    }

    if (params.has("p")) {
      params.delete("p");
    }

    return params.toString();
  }, [name, searchParams, value]);

  return (
    <Link
      prefetch={false}
      href={pathname + "?" + createQueryString()}
      className='w-full h-[30px] flex items-center'
    >
      <span
        className={cn(
          "h-5 w-5 rounded-full flex items-center justify-center overflow-hidden border border-[#333333]",
          { "bg-[#333333]": searchParams?.getAll(name).includes(value) }
        )}
      >
        <CheckIcon className='h-4 w-4 text-white' />
      </span>

      <span className='text-[13px] uppercase ml-[13px]'>{label}</span>
    </Link>
  );
}
