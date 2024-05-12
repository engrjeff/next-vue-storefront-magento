import { sdk } from '@/sdk/sdk.config';
import { firstOrNull } from '../helpers';

export async function getCategory(categoryParams: string[]) {
  try {
    const categories = await sdk.magento.categories(
      {
        filters: {
          url_path: {
            eq: categoryParams.join('/'),
          },
        },
      },
      { categories: 'single-category' }
    );

    const currentCategory = firstOrNull(categories.data.categories?.items);

    console.log(currentCategory?.breadcrumbs);

    return currentCategory;
  } catch (error) {
    return null;
  }
}
