"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFacetFilters = void 0;
const sdk_config_1 = require("@/sdk/sdk.config");
const ProductFilters_1 = require("./ProductFilters");
const ProductSortSelect_1 = require("./ProductSortSelect");
async function ProductFacetFilters({ category_uid, }) {
    const { data: filtersData } = await sdk_config_1.sdk.magento.products({
        pageSize: 12,
        currentPage: 1,
        filter: { category_uid: { eq: category_uid } },
    }, { products: "plp-aggregations" });
    const sortFields = filtersData?.products?.sort_fields;
    const filters = filtersData?.products?.aggregations;
    return (<div>
      <div className='hidden xl:flex items-center justify-between pb-6'>
        <ProductSortSelect_1.ProductsSortSelect key={"key"} sortOptions={sortFields} id='plp-sort-select'/>
      </div>
      <ProductFilters_1.ProductFilters 
    // rootCategory={baseCategory}
    filters={filters}/>
    </div>);
}
exports.ProductFacetFilters = ProductFacetFilters;
