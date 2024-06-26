'use client';

interface CategoryHeaderProps {
  name: string;
  productCount?: number;
}

export function CategoryHeader({
  name,
  productCount = 0,
}: CategoryHeaderProps) {
  return (
    <div className="flex items-center flex-wrap justify-center gap-1 lg:gap-3 mb-3 lg:mb-0">
      <h1 className="font-sans text-xl mb-0 text-center whitespace-nowrap">
        {name}
      </h1>
      <span className="font-normal text-lightText text-sm whitespace-nowrap">
        {productCount} {productCount > 1 ? 'items' : 'item'}
      </span>
    </div>
  );
}
