"use client";

interface SearchResultHeaderProps {
  query?: string;
  productCount?: number;
}

export function SearchResultHeader({
  query,
  productCount = 0,
}: SearchResultHeaderProps) {
  return (
    <div className='flex items-center flex-wrap justify-center gap-1 lg:gap-3 mb-3 lg:mb-0'>
      <h1 className='font-sans text-xl mb-0 text-center'>
        Search results for: {query}
      </h1>
      <span className='font-normal text-lightText text-sm'>
        {productCount} {productCount > 1 ? "items" : "item"}
      </span>
    </div>
  );
}
