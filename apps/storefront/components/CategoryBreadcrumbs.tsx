import { MagentoTypes } from "@/types/magento.types";
import Link from "next/link";

interface BreadcrumbsProps {
  currentPathname: string;
  paths: string[];
  breadCrumbs:
    | MagentoTypes.Maybe<MagentoTypes.Maybe<MagentoTypes.Breadcrumb>[]>
    | undefined;
}

export function CategoryBreadcrumbs({
  currentPathname,
  paths,
  breadCrumbs,
}: BreadcrumbsProps) {
  const lastPath = paths.join("/");

  return (
    <div role='navigation'>
      <ul className='text-[10px] lg:text-xs uppercase font-normal flex space-x-1.5 flex-wrap'>
        <li>
          <Link prefetch={false} href='/'>
            Home
          </Link>
        </li>
        {breadCrumbs
          ? breadCrumbs.map((crumb) => (
              <li key={crumb?.category_url_path} className='whitespace-nowrap'>
                <span aria-hidden='true' className='mr-2'>
                  /
                </span>
                <Link prefetch={false} href={`/${crumb?.category_url_path}`}>
                  {crumb?.category_name}
                </Link>
              </li>
            ))
          : null}
        <li className='whitespace-nowrap'>
          <span aria-hidden='true' className='mr-2'>
            /
          </span>
          <Link prefetch={false} href={`/${lastPath}`} className='font-bold'>
            {currentPathname}
          </Link>
        </li>
      </ul>
    </div>
  );
}
