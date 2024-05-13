import { Aggregation, CategoryTree, Maybe } from "@vue-storefront/magento-types";
import * as React from "react";
export interface ProductFiltersProps {
    rootCategory?: Maybe<CategoryTree>;
    filters?: Maybe<Maybe<Aggregation>[]>;
    subcategories?: Maybe<Maybe<CategoryTree>[]>;
    priceRangeFilters?: Maybe<Aggregation>;
}
export declare function ProductFilters(props: ProductFiltersProps): React.JSX.Element;
//# sourceMappingURL=ProductFilters.d.ts.map