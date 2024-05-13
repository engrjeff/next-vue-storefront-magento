'use client';

import { useScreenDimension } from '@/hooks/useScreenDimension';
import {
  XMarkIcon as CloseIcon,
  Bars3Icon as MenuIcon,
} from '@heroicons/react/24/outline';
import * as React from 'react';

export function MWebMenu({ children }: { children?: React.ReactNode }) {
  const { height } = useScreenDimension();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!window) return;

    const resizeCallback = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', resizeCallback);

    return () => {
      window.removeEventListener('resize', resizeCallback);
    };
  }, []);

  return (
    <div className="flex items-center xl:hidden">
      <button onClick={() => setMenuOpen(true)}>
        <span className="sr-only">Menu</span>
        <MenuIcon className="h-7 w-7" />
      </button>
      <div
        data-menu-active={menuOpen}
        data-shown={menuOpen}
        className="group xl:hidden fixed inset-0 z-50 w-screen pointer-events-none data-[shown=true]:pointer-events-auto"
      >
        <div
          style={{ height: `${height}px` }}
          className="fixed top-0 -left-full z-50 group-data-[shown=true]:left-0 transition-[left] duration-300"
        >
          <div
            style={{ height: `${height}px` }}
            onClick={() => setMenuOpen(false)}
            className="w-full fixed inset-0 bg-overlay opacity-0 transition-all duration-200 group-data-[shown=true]:opacity-100 "
          ></div>
          <nav
            key={menuOpen ? 'key-true' : 'key-false'}
            className="h-full max-w-[422px] w-[calc(100vw-100px)] bg-white relative"
          >
            <div className="p-[15px] text-[13px] font-heading font-bold text-center uppercase border border-border">
              Menu
            </div>
            <div className="bg-white absolute top-0 right-0 translate-x-full">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-500 px-[15px] py-3 inline-flex items-center justify-center"
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon className="h-7 w-7" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(100%-60px)]">
              <div className="space-y-2 m-2.5 mb-0">{children}</div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
