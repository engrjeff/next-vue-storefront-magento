import { CategoryBreadcrumbs } from "@/components/CategoryBreadcrumbs";
import { CategoryDescription } from "@/components/CategoryDescription";
import { CategoryHeader } from "@/components/CategoryHeader";
import Container from "@/components/Container";
import { NoProductsView } from "@/components/NoProductsView";
import { Pagination } from "@/components/Pagination";
import { ProductFacetFilters } from "@/components/ProductFacetFilters";
import { ProductsListing } from "@/components/ProductsListing";
import { envVars } from "@/lib/env-vars";
import { parseCategoryFromPath } from "@/services/helpers";
import { getCategory } from "@/services/queries/getCategory";
import { getProducts } from "@/services/queries/getProducts";
import { getRootCategories } from "@/services/queries/getRootCategories";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense, cache } from "react";

const cachedGetCategory = cache(getCategory);

interface CategoryPageProps {
  params: { category: string[] };
  searchParams?: { [key: string]: string | string[] };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryUrl = parseCategoryFromPath(params.category);

  const currentCategory = await cachedGetCategory(categoryUrl);

  if (!currentCategory) return notFound();

  return {
    title: currentCategory.meta_title,
    description: currentCategory.meta_description,
    keywords: currentCategory.meta_keywords,
  };
}

export async function generateStaticParams() {
  try {
    if (envVars.NODE_ENV === "development") return [];

    const rootCategories = await getRootCategories();
    return (
      rootCategories?.map((cat) => {
        return {
          category: [cat?.url_path],
        };
      }) ?? []
    );
  } catch (error) {
    return [];
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const categoryUrl = parseCategoryFromPath(params.category);

  const currentCategory = await cachedGetCategory(categoryUrl);

  if (!currentCategory) return notFound();

  const productData = await getProducts({
    categoryUid: currentCategory.uid,
    searchParams,
    url_path: categoryUrl,
    pageType: "PLP",
  });

  const products = productData?.products?.items;

  const totalCount = productData?.products?.total_count ?? 0;

  const productsPageInfo = productData?.products?.page_info;

  return (
    <main>
      <Container>
        <div className='grid lg:grid-cols-3 gap-2 lg:gap-4 pt-4 pb-2 lg:py-6 items-center'>
          <CategoryBreadcrumbs
            currentPathname={currentCategory.name!}
            paths={params.category}
            breadCrumbs={currentCategory.breadcrumbs}
          />
          <CategoryHeader
            key={currentCategory.name!}
            name={currentCategory.name!}
            productCount={totalCount}
          />
        </div>
        <CategoryDescription description={currentCategory.description!} />

        {totalCount === 0 ? (
          <NoProductsView />
        ) : (
          <div className='mb-20 md:mt-4'>
            <div className='flex flex-col xl:flex-row xl:gap-8'>
              <ProductFacetFilters
                categorySegments={params.category}
                category_uid={currentCategory.uid}
                searchParams={searchParams}
              />
              <div className='flex-1'>
                <div className='hidden xl:flex items-center justify-end pb-6 min-h-[54px]'>
                  <Suspense>
                    <Pagination
                      key={String(searchParams?.p)}
                      currentPage={productsPageInfo?.current_page!}
                      totalPages={productsPageInfo?.total_pages!}
                    />
                  </Suspense>
                </div>
                <ProductsListing
                  categoryUrl={categoryUrl}
                  products={products}
                />
                <div className='hidden xl:flex items-center justify-end pb-6 min-h-[54px]'>
                  <Suspense>
                    <Pagination
                      key={String(searchParams?.p)}
                      currentPage={productsPageInfo?.current_page!}
                      totalPages={productsPageInfo?.total_pages!}
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
