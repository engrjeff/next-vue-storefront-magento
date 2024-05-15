import { getAggregations } from "@/services/queries/getAggregations";
import { Suspense } from "react";
import { MWebProductFilters } from "./MWebProductFilters";
import { ProductFilters } from "./ProductFilters";
import { ProductsSortSelect } from "./ProductSortSelect";

interface ProductFacetFiltersProps {
  category_uid: string;
  searchParams?: { [key: string]: string | string[] };
  categorySegments: string[];
}

export async function ProductFacetFilters({
  category_uid,
  searchParams,
  categorySegments,
}: ProductFacetFiltersProps) {
  const aggr = await getAggregations({
    categoryUid: category_uid,
    searchParams,
    categorySegments,
  });

  const sortFields = aggr?.filtersData?.data?.products?.sort_fields;

  const filters = aggr?.filtersData?.data?.products?.aggregations;

  const priceRangeFilters = aggr?.priceRangeFilters;

  const sortSelectKey =
    (searchParams?.product_list_order as string) ?? "plp-sort";

  return (
    <div>
      <div className='hidden xl:flex items-center justify-between pb-6'>
        <ProductsSortSelect
          key={sortSelectKey}
          sortOptions={sortFields}
          id='plp-sort-select'
        />
      </div>
      <Suspense>
        <ProductFilters
          rootCategory={aggr?.baseCategory}
          filters={filters}
          subcategories={aggr?.categoryFilters}
          priceRangeFilters={priceRangeFilters}
        />
      </Suspense>

      <div className='grid grid-cols-2 gap-5 xl:hidden mb-4 lg:mb-6'>
        <Suspense>
          <MWebProductFilters
            rootCategory={aggr?.baseCategory}
            filters={filters}
            subcategories={aggr?.categoryFilters}
            priceRangeFilters={priceRangeFilters}
          />
        </Suspense>
        <ProductsSortSelect
          key={sortSelectKey}
          sortOptions={sortFields}
          id='plp-mweb-sort-select'
        />
      </div>
    </div>
  );
}
