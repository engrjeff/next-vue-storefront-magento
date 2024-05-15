/* eslint-disable @next/next/no-img-element */
"use client";

import { toHTML } from "@/lib/utils";
import { MagentoTypes } from "@/types/magento.types";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { MWebMenuItem } from "./MWebMenuItem";

// interface CategoryJson {
//   uid: string;
//   url_key: string;
//   url_path: string;
//   canonical_url: string;
//   name: string;
//   image?: string;
// }

export function MWebCategory({
  category,
  megamenu,
}: {
  category: MagentoTypes.Maybe<MagentoTypes.CategoryTree>;
  megamenu:
    | MagentoTypes.Maybe<MagentoTypes.Maybe<MagentoTypes.CmsBlock>[]>
    | undefined;
  mwebBlock: MagentoTypes.Maybe<MagentoTypes.CmsBlocks> | undefined;
}) {
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);

  const [cmsblock, setcmsblock] = React.useState<string>();

  //   const [categoryJson, setCategoryJson] = React.useState<CategoryJson[]>([]);

  //   React.useEffect(() => {
  //     if (mwebBlock?.items && mwebBlock?.items[0]?.content) {
  //       const elem = document.createElement("div");
  //       elem.innerHTML = mwebBlock.items[0]?.content;
  //       const mwebBlockJson = elem.textContent
  //         ? JSON.parse(elem.textContent)
  //         : { categories: [] };

  //       setCategoryJson(mwebBlockJson.categories);
  //     }
  //   }, [mwebBlock?.items]);

  if (!category) return null;

  const categorySubmenuHTML = megamenu?.find(
    (m) => m?.block_id === String(category.mega_menu)
  )?.content as string;

  //   const categoryJsonItem = categoryJson?.find(
  //     (cat) => cat.uid === category.uid
  //   );

  return (
    <>
      {categorySubmenuHTML ? (
        <MWebMenuItem
          as='button'
          className={
            category.name?.toLowerCase() === "sale"
              ? "text-uired relative"
              : "relative"
          }
          onClick={async () => {
            const htmlblock = toHTML(categorySubmenuHTML);
            setcmsblock(htmlblock as any);
            setSubMenuOpen(true);
          }}
        >
          <span className='z-[1]'>{category.name}</span>
          {/* {categoryJsonItem?.image ? (
            <img
              src={categoryJsonItem.image}
              alt={categoryJsonItem.name}
              className='absolute top-0 bottom-0 right-4 pointer-events-none object-contain h-full'
            />
          ) : null} */}
        </MWebMenuItem>
      ) : (
        <MWebMenuItem
          className={
            category?.name?.toLowerCase() === "sale"
              ? "text-uired relative"
              : "relative"
          }
          as='link'
          href={`/${category.url_path}/`}
        >
          <span className='z-[1]'>{category.name}</span>
          {/* {categoryJsonItem?.image ? (
            <img
              src={categoryJsonItem.image}
              alt={categoryJsonItem.name}
              className='absolute top-0 bottom-0 right-4 pointer-events-none object-contain h-full'
            />
          ) : null} */}
        </MWebMenuItem>
      )}
      <div
        data-submenu-open={subMenuOpen}
        className='absolute inset-y-0 z-[2] -left-full w-full bg-white data-[submenu-open=true]:left-0 transition-[left] duration-300'
      >
        <nav className='h-full w-full'>
          <div className='relative p-[15px] text-[12px] whitespace-nowrap font-heading font-bold text-center uppercase border border-border'>
            <button
              aria-label={`go back to ${category}`}
              onClick={() => setSubMenuOpen(false)}
              className='absolute top-4 left-2.5'
            >
              <ChevronLeftIcon className='h-4 w-5 text-gray-500' />
            </button>
            <span>{category.name}</span>
          </div>
          {cmsblock ? (
            <div className='overflow-y-auto max-h-[calc(100%-60px)]'>
              <div
                className='mweb-categories-cms'
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: cmsblock }}
              />
            </div>
          ) : null}
        </nav>
      </div>
    </>
  );
}
