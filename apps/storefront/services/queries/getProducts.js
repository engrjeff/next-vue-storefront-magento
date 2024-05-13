"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const sdk_config_1 = require("@/sdk/sdk.config");
async function getProducts({ categoryUid }) {
    try {
        const productData = await sdk_config_1.sdk.magento.products({
            pageSize: 12,
            currentPage: 1,
            filter: {
                category_uid: {
                    eq: categoryUid,
                },
            },
        }, { products: 'plp-query' });
        return {
            products: {
                ...productData.data.products,
                items: productData.data.products?.items,
            },
        };
    }
    catch (error) {
        return null;
    }
}
exports.getProducts = getProducts;
