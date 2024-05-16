import { MagentoTypes } from "@/types/magento.types";
import Link from "next/link";
import { ProductItem } from "./ProductItem";

interface Props {
  searchQuery: string;
  products: MagentoTypes.Maybe<MagentoTypes.ConfigurableProduct[]> | undefined;
}

export async function SearchResultsListing({ products, searchQuery }: Props) {
  if (products?.length === 0)
    return (
      <div className='text-center'>
        <p className='font-semibold mb-1'>
          Sorry, there are no products found.
        </p>
        <Link
          href={`/catalogsearch/result?q=${searchQuery}`}
          className='text-[#bbb] underline hover:text-black'
        >
          Clear Filters
        </Link>
      </div>
    );

  return (
    <>
      <ul className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-y-3 gap-x-1.5'>
        {products?.map((product, index) => (
          <li key={`srp-product-${product?.uid}`}>
            <ProductItem product={product} index={index + 1} />
          </li>
        ))}
      </ul>
    </>
  );
}
