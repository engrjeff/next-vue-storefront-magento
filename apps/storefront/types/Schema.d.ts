import "@vue-storefront/magento-types";
import { ConfigurableProduct, Products } from "@vue-storefront/magento-types";

declare module "@vue-storefront/magento-types" {
  type ProductResult = Omit<Products, "items">;

  interface ProductsQueryResult extends ProductResult {
    items: ConfigurableProduct[];
  }

  export interface CategoryTree {
    mega_menu: number;
  }

  export interface CmsBlock {
    block_id: string;
  }

  export interface SortField {
    default_direction: string;
    use_sort_direction: boolean;
  }

  export interface ProductsListQuery {
    products: ProductsQueryResult;
  }
}
