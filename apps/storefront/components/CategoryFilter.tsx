"use client";

import { cn } from "@/lib/utils";
import { MagentoTypes } from "@/types/magento.types";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

function comparePaths(pathname: string, anypath?: MagentoTypes.Maybe<string>) {
  if (!anypath) return false;

  return (
    pathname.split("/").filter(Boolean).join("/") ===
    anypath?.split("/").filter(Boolean).join("/")
  );
}

export function CategoryFilter({
  categoriesFilters,
  rootCategory,
}: {
  categoriesFilters: MagentoTypes.Maybe<
    MagentoTypes.Maybe<MagentoTypes.CategoryTree>[]
  >;
  rootCategory?: MagentoTypes.Maybe<MagentoTypes.CategoryTree>;
}) {
  const pathname = usePathname();

  return (
    <ul>
      <li className='border-b xl:border-none'>
        <Link
          prefetch={false}
          href={`/${rootCategory?.url_path}/`}
          className='min-h-[30px] hidden xl:block'
        >
          <span
            className={cn("text-[13px] uppercase", {
              "font-semibold underline":
                pathname === `/${rootCategory?.url_path}/`,
            })}
          >
            {rootCategory?.name}
          </span>
        </Link>

        <Link
          prefetch={false}
          href={`/${rootCategory?.url_path}/`}
          className='w-full flex items-center justify-between py-[15px] px-5 xl:hidden'
        >
          <span className='leading-[28px] uppercase'>
            {" "}
            {rootCategory?.name}
          </span>
          <span
            className={cn(
              "h-5 w-5 rounded-full flex items-center justify-center overflow-hidden border border-[#333333]",
              {
                "bg-[#333333]": pathname === `/${rootCategory?.url_path}/`,
              }
            )}
          >
            <CheckIcon className='h-4 w-4 text-white' />
          </span>
        </Link>
      </li>
      {categoriesFilters?.map((category) => (
        <li
          key={`category-filter-option-${category?.uid}`}
          className='border-b xl:border-none'
        >
          <Link
            prefetch={false}
            href={`/${category?.url_path}/`}
            className='min-h-[30px] hidden xl:block'
          >
            <span
              className={cn("text-[13px] uppercase", {
                "font-semibold underline": comparePaths(
                  pathname!,
                  category?.url_path + "/"
                ),
              })}
            >
              {category?.name}
            </span>
          </Link>

          <Link
            prefetch={false}
            href={`/${category?.url_path}/`}
            className='w-full flex items-center justify-between py-[15px] px-5 xl:hidden'
          >
            <span className='leading-[28px] uppercase'> {category?.name}</span>
            <span
              className={cn(
                "h-5 w-5 rounded-full flex items-center justify-center overflow-hidden border border-[#333333]",
                {
                  "bg-[#333333]": comparePaths(
                    pathname!,
                    category?.url_path + "/"
                  ),
                }
              )}
            >
              <CheckIcon className='h-4 w-4 text-white' />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
