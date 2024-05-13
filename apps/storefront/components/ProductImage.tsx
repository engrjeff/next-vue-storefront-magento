'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import * as React from 'react';

type ImageProps = {
  imageSrc: string;
  alt: string;
};

const fallbackImage = '/images/plp-placeholder.png';

export function ProductImage({ imageSrc, alt }: ImageProps) {
  const [isLoading, setLoading] = React.useState(true);

  const imageRef = React.useRef<HTMLImageElement | null>(null);

  return (
    <div className="w-full h-[344px] lg:h-[390px] aspect-[9/16] relative bg-white overflow-hidden">
      {!imageSrc ? (
        <Image
          ref={imageRef}
          alt="Showpo placeholder"
          src={fallbackImage}
          fill
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out object-contain w-auto h-auto',
            isLoading ? 'grayscale blur-2xl' : 'grayscale-0 blur-0'
          )}
          onLoad={() => setLoading(false)}
        />
      ) : (
        <Image
          ref={imageRef}
          alt={alt ?? ''}
          src={imageSrc}
          fill
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out object-cover h-auto',
            isLoading ? 'grayscale blur-2xl' : 'grayscale-0 blur-0',
            imageSrc.includes('placeholder')
              ? 'object-contain'
              : 'object-cover',
            imageRef.current?.src.includes('plp-placeholder.png')
              ? 'object-contain'
              : ''
          )}
          onLoad={() => setLoading(false)}
          onError={() => {
            if (!imageRef.current) return;

            imageRef.current.src = fallbackImage;
          }}
        />
      )}
    </div>
  );
}
