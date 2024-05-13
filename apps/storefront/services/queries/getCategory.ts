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

    return currentCategory;
  } catch (error) {
    return null;
  }
}
