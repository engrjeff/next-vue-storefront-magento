import { getSRPAggregations } from "@/services/queries/getAggregations";
import { Suspense } from "react";
import { MWebProductFilters } from "./MWebProductFilters";
import { ProductFilters } from "./ProductFilters";
import { ProductsSortSelect } from "./ProductSortSelect";

interface ProductFacetFiltersProps {
  searchParams?: { [key: string]: string | string[] };
}

export async function SearchResultsFacetFilters({
  searchParams,
}: ProductFacetFiltersProps) {
  const aggr = await getSRPAggregations({
    searchParams,
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
          id='srp-sort-select'
        />
      </div>
      <Suspense>
        <ProductFilters
          filters={filters}
          priceRangeFilters={priceRangeFilters}
        />
      </Suspense>

      <div className='grid grid-cols-2 gap-5 xl:hidden mb-4 lg:mb-6'>
        <Suspense>
          <MWebProductFilters
            filters={filters}
            priceRangeFilters={priceRangeFilters}
          />
        </Suspense>
        <ProductsSortSelect
          key={sortSelectKey}
          sortOptions={sortFields}
          id='srp-mweb-sort-select'
        />
      </div>
    </div>
  );
}
