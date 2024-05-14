import { sdk } from "@/sdk/sdk.config";
import { MagentoTypes } from "@/types/magento.types";
import {
  catchPLPError,
  createFacetFilters,
  createSortParam,
  extractPLPSearchParams,
} from "../helpers";
import { getStoreConfig } from "./getStoreConfig";

interface GetProductsOptions {
  categoryUid: string;
  searchParams?: { [key: string]: string | string[] };
  pageType?: "PLP" | "SRP";
  url_path: string;
}

export async function getProducts({
  categoryUid,
  searchParams,
  pageType = "PLP",
  url_path,
}: GetProductsOptions) {
  try {
    const storeConfig = await getStoreConfig();

    const pageSize = storeConfig?.grid_per_page ?? 20;

    const { page, sort, facetFilters } = extractPLPSearchParams(searchParams);

    const filters = createFacetFilters(facetFilters);

    let defaultSort: MagentoTypes.Maybe<string> | undefined;

    if (pageType === "PLP") {
      const sortOptionsRes = await sdk.magento.products(
        {
          pageSize,
          currentPage: page,
          sort: undefined,
          filter: {
            category_uid: {
              eq: categoryUid,
            },
          },
        },
        { products: "plp-sort-options" }
      );

      // catch error
      catchPLPError(sortOptionsRes.errors, url_path, searchParams);

      defaultSort = sortOptionsRes?.data?.products?.sort_fields?.default;
    }

    const sortParam = createSortParam({ sort, defaultSort, pageType });

    const productData = await sdk.magento.products(
      {
        pageSize,
        currentPage: page,
        filter: {
          category_uid: {
            eq: categoryUid,
          },
          ...filters,
        },
        sort: sortParam,
      },
      { products: "plp-query" }
    );

    // catch error
    catchPLPError(productData.errors, url_path, searchParams);

    return {
      products: {
        ...productData.data.products,
        items: productData.data.products?.items as MagentoTypes.Maybe<
          MagentoTypes.ConfigurableProduct[]
        >,
      },
    };
  } catch (error: any) {
    // catch error
    catchPLPError(error, url_path, searchParams);

    throw error;
  }
}
