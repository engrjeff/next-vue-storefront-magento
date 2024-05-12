'use client';

import { cn, toHTML } from '@/lib/utils';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CategoryTree, CmsBlock, Maybe } from '@vue-storefront/magento-types';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

interface MegamenuProps {
  categories: Maybe<Maybe<CategoryTree>[]>;
  megamenu?: Maybe<Maybe<CmsBlock>[]> | undefined;
}

function Megamenu({ categories, megamenu }: MegamenuProps) {
  const [cmsblock, setcmsblock] = React.useState<string>();
  const [activeMegamenu, setActiveMegamenu] = React.useState<string>();

  function getMegamenuHTMLForCategory(megamenuId: string) {
    return megamenu?.find((m) => m?.block_id === megamenuId.toString())
      ?.content as string;
  }

  return (
    <NavigationMenu.Root
      value={activeMegamenu}
      onValueChange={async (megamenuId) => {
        const htmlblock = toHTML(getMegamenuHTMLForCategory(megamenuId));
        setcmsblock(htmlblock as any);

        setActiveMegamenu(megamenuId);
      }}
    >
      <NavigationMenu.List className="h-[53px] flex items-center justify-center">
        {categories?.map((category, index) => (
          <NavigationMenu.Item
            key={category?.uid + (index + 1).toString()}
            className="mr-[11px]"
            value={String(category?.mega_menu)}
          >
            <NavigationMenu.Trigger asChild className="px-2.5">
              <Link
                prefetch={false}
                href={`/${category?.url_path}/`}
                className="h-full inline-block"
              >
                <span
                  className={cn(
                    'text-xs leading-[53px] font-normal font-heading uppercase text-muted-foreground transition-colors hover:text-black',
                    {
                      'text-uired': category?.name?.toLowerCase() === 'sale',
                    }
                  )}
                >
                  {category?.name}
                </span>
              </Link>
            </NavigationMenu.Trigger>
            {category?.mega_menu ? (
              <NavigationMenu.Content className="absolute top-12 left-0 right-6 w-full bg-white shadow-md rounded py-8 px-10 z-20">
                {cmsblock ? <MegamenuBlock content={cmsblock} /> : null}
              </NavigationMenu.Content>
            ) : null}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default Megamenu;

function MegamenuBlock({ content }: { content: string }) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const images = contentRef.current.querySelectorAll('img');

    images.forEach((image) => {
      image.decode().catch(() => {
        image.style.display = 'none';
      });
    });
  }, []);

  return (
    <div
      ref={contentRef}
      className="megamenu-cms-block"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
