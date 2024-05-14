import { sanitizeText } from "@/lib/utils";
import { sdk } from "@/sdk/sdk.config";
import { firstOrNull } from "../helpers";

export async function getBaseRootCategory(urlPath: string) {
  try {
    const categories = await sdk.magento.categories(
      {
        filters: {
          url_path: {
            eq: urlPath,
          },
        },
      },
      { categories: "base-root-category" }
    );

    const category = firstOrNull(categories.data.categories?.items);

    if (!category) return null;

    return {
      ...category,
      name: sanitizeText(category?.name),
      meta_title: sanitizeText(category?.meta_title),
      meta_description: sanitizeText(category?.meta_description),
    };
  } catch (error) {
    return null;
  }
}
