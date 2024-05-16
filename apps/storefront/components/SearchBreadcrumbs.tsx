import {
  BreadcrumbItem,
  BreadcrumbSeparator,
  Breadcrumbs,
} from "@/components/Breadcrumbs";

export function SearchBreadcrumbs({ searchQuery }: { searchQuery?: string }) {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href='/' className='text-[10px] lg:text-xs'>
        Home
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem
        className='font-bold text-[10px] lg:text-xs'
        href={`/catalogsearch/result?q=${searchQuery}`}
      >
        {searchQuery}
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
