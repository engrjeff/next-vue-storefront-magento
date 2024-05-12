import { sdk } from '@/sdk/sdk.config';
import { firstOrNull } from '../helpers';

export async function getRootCategories() {
  try {
    const response = await sdk.magento.categories(
      {},
      { categories: 'root-categories' }
    );

    const baseCat = firstOrNull(response.data.categories?.items);

    return baseCat?.children ?? [];
  } catch (error) {
    return [];
  }
}
