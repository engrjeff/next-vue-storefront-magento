'use client';

import { cn } from '@/lib/utils';
import React from 'react';

function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const [isScrollingUp, setIsScrollingUp] = React.useState(true);
  const [lastScrolledY, setLastScrolledY] = React.useState(0);

  React.useEffect(() => {
    if (!window) return;

    const scrollEventCallback = () => {
      const scrolledY = window.scrollY;

      setIsScrollingUp(scrolledY < lastScrolledY);

      setLastScrolledY(scrolledY);
    };

    window.addEventListener('scroll', scrollEventCallback);

    return () => {
      window.removeEventListener('scroll', scrollEventCallback);
    };
  }, [lastScrolledY]);

  return (
    <header
      className={cn(
        'max-w-full z-[20] bg-white  transition-transform',
        isScrollingUp ? 'sticky top-0 translate-y-0' : '-translate-y-20'
      )}
    >
      {children}
    </header>
  );
}

export default HeaderWrapper;
