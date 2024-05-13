import { sdk } from '@/sdk/sdk.config';
import { MagentoTypes } from '@/types/magento.types';
import { extractPLPSearchParams } from '../helpers';
import { getStoreConfig } from './getStoreConfig';

interface GetProductsOptions {
  categoryUid: string;
  searchParams?: { [key: string]: string | string[] };
}

export async function getProducts({
  categoryUid,
  searchParams,
}: GetProductsOptions) {
  try {
    const storeConfig = await getStoreConfig();

    const pageSize = storeConfig?.grid_per_page ?? 20;

    const { page } = extractPLPSearchParams(searchParams);

    const sortOptions = await sdk.magento.products(
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
      { products: 'plp-sort-options' }
    );

    const defaultSort = sortOptions?.data?.products?.sort_fields?.default;

    const productData = await sdk.magento.products(
      {
        pageSize,
        currentPage: page,
        filter: {
          category_uid: {
            eq: categoryUid,
          },
        },
        sort: defaultSort
          ? {
              [defaultSort]:
                defaultSort === 'go_live_at'
                  ? MagentoTypes.SortEnum.Desc
                  : MagentoTypes.SortEnum.Asc,
            }
          : undefined,
      },
      { products: 'plp-query' }
    );

    return {
      products: {
        ...productData.data.products,
        items: productData.data.products?.items as MagentoTypes.Maybe<
          MagentoTypes.ConfigurableProduct[]
        >,
      },
    };
  } catch (error) {
    return null;
  }
}
