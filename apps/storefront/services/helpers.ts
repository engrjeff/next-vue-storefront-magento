import { MagentoTypes } from "@/types/magento.types";
import { notFound, redirect } from "next/navigation";
export function firstOrNull<T>(fromArr?: T[] | null) {
  return fromArr ? (fromArr[0] ? fromArr[0] : null) : null;
}

export function parseCategoryFromPath(category: string[]) {
  return category.join("/");
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

  const fromPrice = price?.split("-")[0];
  const toPrice = price?.split("-")[1];

  const sort = searchParams?.product_list_order
    ? String(searchParams?.product_list_order)
    : undefined;

  const excludedKeys = ["p", "product_list_order", "price", "q"];

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
          typeof searchParams[key] === "string"
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

export function createSearchParams(queryParams: any) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(queryParams)) {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        params.append(key, val);
      });
    } else {
      params.append(key, value as string);
    }
  }

  return params;
}

export function catchPLPError(
  errors: any,
  url_path: string,
  searchParams: any
) {
  const redirectWithParams = createSearchParams(searchParams);

  if (errors && Array.isArray(errors)) {
    const err = errors[0];

    // catch invalid filter error
    if (err?.message?.includes('Variable "$filter" got invalid value')) {
      return redirect(url_path ? "/" + url_path : "/");
    }

    // catch invalid sort error
    if (err?.message?.includes('Variable "$sort" got invalid value')) {
      // remove "product_list_order" query param, retain the others
      redirectWithParams.delete("product_list_order");

      const redirectTo =
        redirectWithParams.size === 0
          ? "/" + url_path
          : "/" + url_path + "/?" + redirectWithParams.toString();

      return redirect(url_path ? redirectTo : "/");
    }

    // catch invalid page error
    if (err?.message?.includes("currentPage value")) {
      return notFound();
    }
  }
}

export function createSortParam({
  sort,
  defaultSort,
  pageType,
}: {
  sort?: string;
  defaultSort?: MagentoTypes.Maybe<string>;
  pageType: "PLP" | "SRP";
}) {
  const isSortingByGoLiveAt = sort === "go_live_at";
  const hasSort = sort && Object.keys(sort).length > 0;

  const _sort = sort
    ? sort === "price_high"
      ? { price: MagentoTypes.SortEnum.Desc }
      : { [sort]: MagentoTypes.SortEnum.Asc }
    : undefined;

  let sortParam: MagentoTypes.ProductAttributeSortInput | undefined = hasSort
    ? isSortingByGoLiveAt
      ? { go_live_at: MagentoTypes.SortEnum.Desc }
      : _sort
    : defaultSort
      ? {
          [defaultSort]:
            defaultSort === "go_live_at"
              ? MagentoTypes.SortEnum.Desc
              : MagentoTypes.SortEnum.Asc,
        }
      : undefined;

  return pageType === "PLP" ? sortParam : _sort;
}

export function createFacetFilters(
  facetFilters?: Record<
    string,
    MagentoTypes.InputMaybe<MagentoTypes.FilterEqualTypeInput> | undefined
  >
) {
  const excludedParams = ["redirect", "utm_source", "document_referrer"];

  const filters = { ...facetFilters };

  Object.keys(filters).forEach((key) => {
    if (excludedParams.includes(key)) {
      delete filters[key as keyof typeof filters];
    }
  });

  return filters;
}
