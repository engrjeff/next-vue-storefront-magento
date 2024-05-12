// @ts-nocheck

import { sdk } from '@/sdk/sdk.config';
import { getRootCategories } from './getRootCategories';

export async function getMegamenu() {
  try {
    const rootCategories = await getRootCategories();

    const displayedCategories = rootCategories.filter(
      (cat) => cat?.include_in_menu
    );

    const megamenuIds = displayedCategories
      .map((c) => c?.mega_menu?.toString())
      .filter(Boolean);

    const megamenuResponse = await sdk.magento.cmsBlocks(megamenuIds, {
      cmsBlocks: 'cms-blocks-query',
    });

    const megamenu = megamenuResponse.data.cmsBlocks?.items;

    return {
      displayedCategories,
      megamenu,
    };
  } catch (error) {
    return null;
  }
}
