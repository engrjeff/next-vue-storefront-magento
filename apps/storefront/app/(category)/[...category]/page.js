"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMetadata = void 0;
const CategoryDescription_1 = require("@/components/CategoryDescription");
const CategoryHeader_1 = require("@/components/CategoryHeader");
const Container_1 = __importDefault(require("@/components/Container"));
const NoProductsView_1 = require("@/components/NoProductsView");
const Pagination_1 = require("@/components/Pagination");
const ProductFacetFilters_1 = require("@/components/ProductFacetFilters");
const ProductsListing_1 = require("@/components/ProductsListing");
const helpers_1 = require("@/services/helpers");
const getCategory_1 = require("@/services/queries/getCategory");
const getProducts_1 = require("@/services/queries/getProducts");
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const cachedGetCategory = (0, react_1.cache)(getCategory_1.getCategory);
async function generateMetadata({ params, }) {
    const categoryUrl = (0, helpers_1.parseCategoryFromPath)(params.category);
    const currentCategory = await cachedGetCategory(categoryUrl);
    if (!currentCategory)
        return (0, navigation_1.notFound)();
    return {
        title: currentCategory.meta_title,
        description: currentCategory.meta_description,
        keywords: currentCategory.meta_keywords,
    };
}
exports.generateMetadata = generateMetadata;
async function CategoryPage({ params, searchParams, }) {
    const categoryUrl = (0, helpers_1.parseCategoryFromPath)(params.category);
    const currentCategory = await cachedGetCategory(categoryUrl);
    if (!currentCategory)
        return (0, navigation_1.notFound)();
    const productData = await (0, getProducts_1.getProducts)({ categoryUid: currentCategory.uid });
    const products = productData?.products?.items;
    const totalCount = productData?.products.total_count ?? 0;
    const productsPageInfo = productData?.products?.page_info;
    return (<main>
      <Container_1.default>
        <div className='grid lg:grid-cols-3 gap-2 lg:gap-4 pt-4 pb-2 lg:py-6 items-center'>
          <span>breadcrumbs</span>
          <CategoryHeader_1.CategoryHeader key={currentCategory.name} name={currentCategory.name} productCount={totalCount}/>
        </div>
        <CategoryDescription_1.CategoryDescription description={currentCategory.description}/>

        {totalCount === 0 ? (<NoProductsView_1.NoProductsView />) : (<div className='mb-20 md:mt-4'>
            <div className='flex flex-col xl:flex-row xl:gap-8'>
              <ProductFacetFilters_1.ProductFacetFilters category_uid={currentCategory.uid}/>
              <div className='flex-1'>
                <div className='hidden xl:flex items-center justify-end pb-6 min-h-[54px]'>
                  <react_1.Suspense>
                    <Pagination_1.Pagination key={String(searchParams?.p)} currentPage={productsPageInfo?.current_page} totalPages={productsPageInfo?.total_pages}/>
                  </react_1.Suspense>
                </div>
                <ProductsListing_1.ProductsListing categoryUrl={categoryUrl} products={products}/>
                <div className='hidden xl:flex items-center justify-end pb-6 min-h-[54px]'>
                  <react_1.Suspense>
                    <Pagination_1.Pagination key={String(searchParams?.p)} currentPage={productsPageInfo?.current_page} totalPages={productsPageInfo?.total_pages}/>
                  </react_1.Suspense>
                </div>
              </div>
            </div>
          </div>)}
      </Container_1.default>
    </main>);
}
exports.default = CategoryPage;
