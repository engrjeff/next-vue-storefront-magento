import { ProductsSortSelect } from './ProductSortSelect';

export function ProductFacetFilters() {
  return (
    <div>
      <div className="hidden xl:flex items-center justify-between pb-6">
        <ProductsSortSelect
          key={'key'}
          //   sortOptions={filtersData?.products?.sort_fields}
          id="plp-sort-select"
        />
      </div>
    </div>
  );
}
