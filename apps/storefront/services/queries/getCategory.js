"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategory = void 0;
const sdk_config_1 = require("@/sdk/sdk.config");
const helpers_1 = require("../helpers");
async function getCategory(urlPath) {
    try {
        const categories = await sdk_config_1.sdk.magento.categories({
            filters: {
                url_path: {
                    eq: urlPath,
                },
            },
        }, { categories: "single-category" });
        const currentCategory = (0, helpers_1.firstOrNull)(categories.data.categories?.items);
        return currentCategory;
    }
    catch (error) {
        return null;
    }
}
exports.getCategory = getCategory;
