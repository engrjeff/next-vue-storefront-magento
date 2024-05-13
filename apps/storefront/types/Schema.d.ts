import '@vue-storefront/magento-types';
import {
  Cart,
  ConfigurableCartItem,
  ConfigurableProduct,
  Products,
} from '@vue-storefront/magento-types';

declare module '@vue-storefront/magento-types' {
  type ProductResult = Omit<Products, 'items'>;

  interface ProductsQueryResult extends ProductResult {
    items: ConfigurableProduct[];
  }

  type CartResult = Omit<Cart, 'items'>;

  interface CartInterface extends CartResult {
    items: ConfigurableCartItem[];
  }

  export interface CustomerCartQuery {
    customerCart: CartInterface;
  }

  export interface CartQuery {
    cart: CartInterface;
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
