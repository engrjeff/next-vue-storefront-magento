import { sdk } from '@/sdk/sdk.config';
import { extractPLPSearchParams } from '../helpers';
import { getStoreConfig } from './getStoreConfig';

interface GetProductsAggregationsOptions {
  categoryUid: string;
  searchParams?: { [key: string]: string | string[] };
}

export async function getAggregations({
  categoryUid,
  searchParams,
}: GetProductsAggregationsOptions) {
  try {
    const storeConfig = await getStoreConfig();

    const pageSize = storeConfig?.grid_per_page ?? 20;

    const { page, fromPrice, toPrice } = extractPLPSearchParams(searchParams);

    const filtersDataCall = sdk.magento.products(
      {
        pageSize,
        currentPage: page,
        filter: { category_uid: { eq: categoryUid } },
      },
      { products: 'plp-aggregations' }
    );

    const priceFilterDataCall = sdk.magento.products(
      {
        pageSize,
        currentPage: page,
        filter: {
          category_uid: { eq: categoryUid },
          price: { from: fromPrice, to: toPrice },
        },
      },
      { products: 'plp-aggregations' }
    );

    const [filtersData, priceFilterData] = await Promise.all([
      filtersDataCall,
      priceFilterDataCall,
    ]);

    const priceRangeFilters =
      priceFilterData?.data?.products?.aggregations?.find(
        (f) => f?.attribute_code === 'price'
      );

    return { filtersData, priceRangeFilters };
  } catch (error) {
    console.log(error);
  }
}
