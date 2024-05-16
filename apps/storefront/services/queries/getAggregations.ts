import { sdk } from "@/sdk/sdk.config";
import { createFacetFilters, extractPLPSearchParams } from "../helpers";
import { getBaseRootCategory } from "./getBaseRootCategory";
import { getStoreConfig } from "./getStoreConfig";

interface GetProductsAggregationsOptions {
  categoryUid: string;
  categorySegments: string[];
  searchParams?: { [key: string]: string | string[] };
}

export async function getAggregations({
  categoryUid,
  categorySegments,
  searchParams,
}: GetProductsAggregationsOptions) {
  try {
    const storeConfig = await getStoreConfig();

    const pageSize = storeConfig?.grid_per_page ?? 20;

    const { page, fromPrice, toPrice, facetFilters } =
      extractPLPSearchParams(searchParams);

    const filters = createFacetFilters(facetFilters);

    const filtersDataCall = sdk.magento.products(
      {
        pageSize,
        currentPage: page,
        filter: { category_uid: { eq: categoryUid } },
      },
      { products: "plp-aggregations" }
    );

    const priceFilterDataCall = sdk.magento.products(
      {
        pageSize,
        currentPage: page,
        filter: {
          category_uid: { eq: categoryUid },
          price: { from: fromPrice, to: toPrice },
          ...filters,
        },
      },
      { products: "plp-aggregations" }
    );

    const subCategoryBasePath =
      categorySegments?.length === 1
        ? categorySegments[0]
        : categorySegments.slice(0, 2).join("/");

    const currentBaseCategoryCall = getBaseRootCategory(subCategoryBasePath!);

    const [filtersData, priceFilterData, baseCategoryData] = await Promise.all([
      filtersDataCall,
      priceFilterDataCall,
      currentBaseCategoryCall,
    ]);

    const priceRangeFilters =
      priceFilterData?.data?.products?.aggregations?.find(
        (f) => f?.attribute_code === "price"
      );

    let categoryFilters = baseCategoryData?.children?.filter(
      (c) => c?.product_count && c.product_count > 0
    );

    let baseCategory = baseCategoryData;

    if (categoryFilters?.length === 0) {
      const rootCatPath = categorySegments[0] as string;

      const rootCategory = await getBaseRootCategory(rootCatPath);

      baseCategory = rootCategory;

      categoryFilters = rootCategory?.children?.filter(
        (c) => c?.product_count && c.product_count > 0
      );
    }

    return { filtersData, priceRangeFilters, baseCategory, categoryFilters };
  } catch (error) {
    console.log(error);
  }
}

export async function getSRPAggregations({
  searchParams,
}: Pick<GetProductsAggregationsOptions, "searchParams">) {
  try {
    const storeConfig = await getStoreConfig();

    const pageSize = storeConfig?.grid_per_page ?? 20;

    const { page, fromPrice, toPrice, facetFilters, searchQuery } =
      extractPLPSearchParams(searchParams);

    const filters = createFacetFilters(facetFilters);

    const filtersDataCall = sdk.magento.products(
      {
        pageSize,
        currentPage: page,
        search: searchQuery,
      },
      { products: "plp-aggregations" }
    );

    const priceFilterDataCall = sdk.magento.products(
      {
        pageSize,
        currentPage: page,
        search: searchQuery,
        filter: {
          price: { from: fromPrice, to: toPrice },
          ...filters,
        },
      },
      { products: "plp-aggregations" }
    );

    const [filtersData, priceFilterData] = await Promise.all([
      filtersDataCall,
      priceFilterDataCall,
    ]);

    const priceRangeFilters =
      priceFilterData?.data?.products?.aggregations?.find(
        (f) => f?.attribute_code === "price"
      );

    return { filtersData, priceRangeFilters };
  } catch (error) {
    console.log(error);
  }
}
