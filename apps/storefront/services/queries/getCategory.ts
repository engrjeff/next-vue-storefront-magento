import { sanitizeText } from "@/lib/utils";
import { sdk } from "@/sdk/sdk.config";
import { firstOrNull } from "../helpers";

export async function getCategory(urlPath: string) {
  try {
    const categories = await sdk.magento.categories(
      {
        filters: {
          url_path: {
            eq: urlPath,
          },
        },
      },
      { categories: "single-category" }
    );

    const currentCategory = firstOrNull(categories.data.categories?.items);

    if (!currentCategory) return null;

    return {
      ...currentCategory,
      name: sanitizeText(currentCategory?.name),
      meta_title: sanitizeText(currentCategory?.meta_title),
      meta_description: sanitizeText(currentCategory?.meta_description),
    };
  } catch (error) {
    return null;
  }
}
