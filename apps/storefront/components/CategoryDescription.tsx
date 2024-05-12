'use client';

import { cn, toHTML } from '@/lib/utils';
import * as React from 'react';

export function CategoryDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = React.useState(false);

  if (!description) return null;

  return (
    <div className="text-lightText text-[15px] font-light min-h-[26px] mb-1">
      <div suppressHydrationWarning className={cn(expanded ? 'block' : 'flex')}>
        <div
          className={cn({
            'h-4 overflow-hidden line-clamp-1 [&_div]:line-clamp-1': !expanded,
          })}
          dangerouslySetInnerHTML={{ __html: toHTML(description) }}
        ></div>
        <button
          className="underline shrink-0"
          onClick={() => setExpanded((val) => !val)}
        >
          read {expanded ? 'less' : 'more'}
        </button>
      </div>
    </div>
  );
}
