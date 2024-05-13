import { MagentoTypes } from '@/types/magento.types';
export function firstOrNull<T>(fromArr?: T[] | null) {
  return fromArr ? (fromArr[0] ? fromArr[0] : null) : null;
}

export function parseCategoryFromPath(category: string[]) {
  return category.join('/');
}

export function extractPLPSearchParams(searchParams?: {
  [key: string]: string | string[];
}) {
  let page: any = searchParams?.p;

  if (!page) {
    page = 1;
  }

  if (isNaN(page)) {
    page = 1;
  }

  const searchQuery = searchParams?.q ? String(searchParams?.q) : undefined;

  const price = searchParams?.price ? String(searchParams?.price) : undefined;

  const fromPrice = price?.split('-')[0];
  const toPrice = price?.split('-')[1];

  const sort = searchParams?.product_list_order
    ? String(searchParams?.product_list_order)
    : undefined;

  const excludedKeys = ['p', 'product_list_order', 'price', 'q'];

  const facetFilters: Record<
    string,
    MagentoTypes.InputMaybe<MagentoTypes.FilterEqualTypeInput> | undefined
  > = {};

  if (!searchParams)
    return {
      page,
      fromPrice,
      toPrice,
      sort,
      facetFilters: undefined,
      searchQuery,
    };

  Object.keys(searchParams).forEach((key) => {
    if (!excludedKeys.includes(key)) {
      facetFilters[key] = {
        in:
          typeof searchParams[key] === 'string'
            ? ([searchParams[key]] as MagentoTypes.InputMaybe<string>[])
            : (searchParams[key] as MagentoTypes.InputMaybe<string>[]),
      };
    }
  });

  return {
    page,
    fromPrice,
    toPrice,
    sort,
    facetFilters,
    searchQuery,
  };
}
