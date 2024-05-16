import Container from "@/components/Container";
import Link from "next/link";
import { NoResultSearchField } from "./NoResultSearchField";

export function SearchNoResultsView({ searchQuery }: { searchQuery?: string }) {
  return (
    <div className='mt-12 xl:mt-0'>
      <div className='bg-[#f7f8f9] p-6 text-center'>
        <p className='text-[13px] font-semibold uppercase text-center font-heading'>
          No results found :(
        </p>
      </div>
      <Container className='mt-8 px-3.5'>
        <p className='text-[15px] pt-1 pb-3 text-center font-normal'>
          Sorry, nothing matches your search for: {searchQuery}
        </p>
        <p className='text-center pb-6 text-[15px] text-[#8c8c8c]'>
          Try searching again or check out our other categories!
        </p>
        <div className='hidden xl:block pb-6 w-1/2 mx-auto'>
          <NoResultSearchField key={searchQuery} />
        </div>
        <div className='pb-6 mx-auto md:px-6 flex items-center justify-center gap-2'>
          <Link
            href='/whats-new'
            className='w-[169px] flex items-center justify-center text-center font-heading px-3 py-1.5 h-12 text-[11px] border bg-black text-white border-black hover:bg-[#333] hover:border-[#007cad] transition-colors tracking-[0.85px] uppercase font-semibold outline-none focus-visible:ring-1 focus-visible:ring-[#007cad] focus-visible:border-transparent'
          >
            Shop What&apos;s New
          </Link>
          <Link
            href='/dresses'
            className='w-[169px] flex items-center justify-center text-center font-heading px-3 py-1.5 h-12 text-[11px] border bg-black text-white border-black hover:bg-[#333] hover:border-[#007cad] transition-colors tracking-[0.85px] uppercase font-semibold outline-none focus-visible:ring-1 focus-visible:ring-[#007cad] focus-visible:border-transparent'
          >
            Shop Dresses
          </Link>
          <Link
            href='/sale'
            className='hidden w-[169px] md:flex items-center justify-center text-center font-heading px-3 py-1.5 h-12 text-[11px] border bg-black text-white border-black hover:bg-[#333] hover:border-[#007cad] transition-colors tracking-[0.85px] uppercase font-semibold outline-none focus-visible:ring-1 focus-visible:ring-[#007cad] focus-visible:border-transparent'
          >
            Shop Sale
          </Link>
        </div>
      </Container>
    </div>
  );
}
