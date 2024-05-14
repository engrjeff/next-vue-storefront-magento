import { getAggregations } from "@/services/queries/getAggregations";
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

  return (
    <div>
      <div className='hidden xl:flex items-center justify-between pb-6'>
        <ProductsSortSelect
          key={"key"}
          sortOptions={sortFields}
          id='plp-sort-select'
        />
      </div>
      <ProductFilters
        rootCategory={aggr?.baseCategory}
        filters={filters}
        subcategories={aggr?.categoryFilters}
        priceRangeFilters={priceRangeFilters}
      />
    </div>
  );
}
