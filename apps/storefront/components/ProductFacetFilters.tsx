import { sdk } from "@/sdk/sdk.config";
import { ProductFilters } from "./ProductFilters";
import { ProductsSortSelect } from "./ProductSortSelect";

interface ProductFacetFiltersProps {
  category_uid: string;
  // searchParams?: { [key: string]: string | string[] };
  // categorySegments: string[];
}

export async function ProductFacetFilters({
  category_uid,
}: ProductFacetFiltersProps) {
  const { data: filtersData } = await sdk.magento.products(
    {
      pageSize: 12,
      currentPage: 1,
      filter: { category_uid: { eq: category_uid } },
    },
    { products: "plp-aggregations" }
  );

  const sortFields = filtersData?.products?.sort_fields;

  const filters = filtersData?.products?.aggregations;

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
        // rootCategory={baseCategory}
        filters={filters}
        // subcategories={categoryFilters}
        // priceRangeFilters={priceRangeFilters}
      />
    </div>
  );
}
