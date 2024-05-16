import Container from "@/components/Container";
import { Pagination } from "@/components/Pagination";
import { SearchBreadcrumbs } from "@/components/SearchBreadcrumbs";
import { SearchNoResultsView } from "@/components/SearchNoResultView";
import { SearchResultsListing } from "@/components/SearchProductListing";
import { SearchResultsFacetFilters } from "@/components/SearchResultFacetFilters";
import { SearchResultHeader } from "@/components/SearchResultHeader";
import { getProducts } from "@/services/queries/getProducts";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface SearchResultsPageProps {
  searchParams?: { [key: string]: string | string[] };
}

export const generateMetadata = ({
  searchParams,
}: SearchResultsPageProps): Metadata => {
  return {
    title: `Search results for: '${searchParams?.q}'`,
  };
};

export default async function SearchResultsPage({
  searchParams,
}: SearchResultsPageProps) {
  if (!searchParams?.q) {
    return redirect("/");
  }

  const searchQuery = searchParams?.q ? String(searchParams?.q) : undefined;

  const productData = await getProducts({
    url_path: `/catalogsearch/result`,
    pageType: "SRP",
    searchParams,
  });

  const products = productData?.products?.items;

  const productsPageInfo = productData?.products?.page_info;

  const totalCount = productData?.products?.total_count ?? 0;

  if (totalCount === 0) {
    return (
      <div>
        <SearchNoResultsView searchQuery={searchQuery as string} />
      </div>
    );
  }

  return (
    <div>
      <Container>
        <div className='flex flex-col gap-2 lg:gap-4 pt-4 pb-2 lg:py-6'>
          <SearchBreadcrumbs searchQuery={searchQuery} />
          <SearchResultHeader query={searchQuery} productCount={totalCount} />
        </div>
        <div className='mb-20 md:mt-8'>
          <div className='flex flex-col xl:flex-row xl:gap-8'>
            <SearchResultsFacetFilters searchParams={searchParams} />
            <div className='flex-1'>
              <div className='hidden xl:flex items-center justify-end pb-6 min-h-[54px]'>
                <Pagination
                  key={String(searchParams.p)}
                  currentPage={productsPageInfo?.current_page!}
                  totalPages={productsPageInfo?.total_pages!}
                />
              </div>
              <SearchResultsListing
                products={products}
                searchQuery={searchQuery!}
              />
              <div className='flex justify-end py-6 min-h-[54px]'>
                <Pagination
                  key={String(searchParams.p)}
                  currentPage={productsPageInfo?.current_page!}
                  totalPages={productsPageInfo?.total_pages!}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
