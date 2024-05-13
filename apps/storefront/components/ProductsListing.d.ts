/// <reference types="react" />
import { MagentoTypes } from "@/types/magento.types";
interface ProductsListingProps {
    categoryUrl: string;
    products: MagentoTypes.Maybe<MagentoTypes.ConfigurableProduct[]> | undefined;
}
export declare function ProductsListing({ categoryUrl, products, }: ProductsListingProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=ProductsListing.d.ts.map