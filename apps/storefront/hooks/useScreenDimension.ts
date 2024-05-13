'use client';

import * as React from 'react';

export function useScreenDimension() {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (!window) return;

    const resizeCallback = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeCallback);

    resizeCallback();

    return () => {
      window.removeEventListener('resize', resizeCallback);
    };
  }, []);

  return { width, height };
}
