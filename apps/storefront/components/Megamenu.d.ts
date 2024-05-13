import { CategoryTree, CmsBlock, Maybe } from '@vue-storefront/magento-types';
import React from 'react';
interface MegamenuProps {
    categories: Maybe<Maybe<CategoryTree>[]>;
    megamenu?: Maybe<Maybe<CmsBlock>[]> | undefined;
}
declare function Megamenu({ categories, megamenu }: MegamenuProps): React.JSX.Element;
export default Megamenu;
//# sourceMappingURL=Megamenu.d.ts.map