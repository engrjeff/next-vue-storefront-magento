"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMegamenu = void 0;
const sdk_config_1 = require("@/sdk/sdk.config");
const getRootCategories_1 = require("./getRootCategories");
async function getMegamenu() {
    try {
        const rootCategories = await (0, getRootCategories_1.getRootCategories)();
        const displayedCategories = rootCategories.filter((cat) => cat?.include_in_menu);
        const megamenuIds = displayedCategories
            .map((c) => c?.mega_menu?.toString())
            .filter(Boolean);
        const megamenuResponse = await sdk_config_1.sdk.magento.cmsBlocks(megamenuIds, {
            cmsBlocks: 'cms-blocks-query',
        });
        const megamenu = megamenuResponse.data.cmsBlocks?.items;
        return {
            displayedCategories,
            megamenu,
        };
    }
    catch (error) {
        return null;
    }
}
exports.getMegamenu = getMegamenu;
