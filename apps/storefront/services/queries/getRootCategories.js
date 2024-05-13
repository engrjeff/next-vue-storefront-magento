"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootCategories = void 0;
const sdk_config_1 = require("@/sdk/sdk.config");
const helpers_1 = require("../helpers");
async function getRootCategories() {
    try {
        const response = await sdk_config_1.sdk.magento.categories({}, { categories: 'root-categories' });
        const baseCat = (0, helpers_1.firstOrNull)(response.data.categories?.items);
        return baseCat?.children ?? [];
    }
    catch (error) {
        return [];
    }
}
exports.getRootCategories = getRootCategories;
