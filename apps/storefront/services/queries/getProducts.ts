import { sdk } from '@/sdk/sdk.config';
import { MagentoTypes } from '@/types/magento.types';

interface GetProductsOptions {
  categoryUid: string;
}

export async function getProducts({ categoryUid }: GetProductsOptions) {
  try {
    const productData = await sdk.magento.products(
      {
        pageSize: 12,
        currentPage: 1,
        filter: {
          category_uid: {
            eq: categoryUid,
          },
        },
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
