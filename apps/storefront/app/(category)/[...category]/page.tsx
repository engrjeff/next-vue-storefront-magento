import { CategoryDescription } from '@/components/CategoryDescription';
import { CategoryHeader } from '@/components/CategoryHeader';
import Container from '@/components/Container';
import { NoProductsView } from '@/components/NoProductsView';
import { Pagination } from '@/components/Pagination';
import { ProductFacetFilters } from '@/components/ProductFacetFilters';
import { getCategory } from '@/services/queries/getCategory';
import { getProducts } from '@/services/queries/getProducts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense, cache } from 'react';

const cachedGetCategory = cache(getCategory);

interface CategoryPageProps {
  params: { category: string[] };
  searchParams?: { [key: string]: string | string[] };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const currentCategory = await cachedGetCategory(params.category);

  if (!currentCategory) return notFound();

  return {
    title: currentCategory.meta_title,
    description: currentCategory.meta_description,
    keywords: currentCategory.meta_keywords,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const currentCategory = await cachedGetCategory(params.category);

  if (!currentCategory) return notFound();

  const productData = await getProducts({ categoryUid: currentCategory.uid });

  const products = productData?.products?.items;

  const totalCount = productData?.products.total_count ?? 0;

  const productsPageInfo = productData?.products?.page_info;

  return (
    <main>
      <Container>
        <div className="grid lg:grid-cols-3 gap-2 lg:gap-4 pt-4 pb-2 lg:py-6 items-center">
          <span>breadcrumbs</span>
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
          <div className="mb-20 md:mt-4">
            <div className="flex flex-col xl:flex-row xl:gap-8">
              <ProductFacetFilters />
              <div className="flex-1">
                <div className="hidden xl:flex items-center justify-end pb-6 min-h-[54px]">
                  <Suspense>
                    <Pagination
                      key={String(searchParams?.p)}
                      currentPage={productsPageInfo?.current_page!}
                      totalPages={productsPageInfo?.total_pages!}
                    />
                  </Suspense>
                </div>
                <div>listings</div>
                <div className="hidden xl:flex items-center justify-end pb-6 min-h-[54px]">
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
    // <div className="container">
    //   <h1 className="text-center font-bold">
    //     {currentCategory.name}{' '}
    //     <span className="text-gray-500 text-sm font-normal">
    //       ({productData?.products?.total_count} items)
    //     </span>
    //   </h1>

    //   <div className="flex">
    //     <div className="w-[220px] shrink-0">filters here</div>
    //     <div className="flex-1">
    //       <div className="ml-auto">Pagination here</div>
    //       <div>
    //         <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
    //           {products?.map((product) => (
    //             <li key={`product-${product?.uid}`}>
    //               <div className="flex flex-col">
    //                 <div className="relative w-full">
    //                   <Image
    //                     src={product?.small_image?.url!}
    //                     alt={product?.small_image?.label!}
    //                     width={190}
    //                     height={320}
    //                     className="w-[190px] h-[320px]"
    //                     blurDataURL={product?.small_image?.url!}
    //                   />
    //                 </div>
    //                 <Link
    //                   href={`/${product?.canonical_url}`}
    //                   className="w-full hover:underline"
    //                 >
    //                   <h2>{product?.name}</h2>
    //                 </Link>
    //               </div>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
