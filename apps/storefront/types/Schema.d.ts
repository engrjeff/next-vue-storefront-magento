import '@vue-storefront/magento-types';

declare module '@vue-storefront/magento-types' {
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
}
