"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = void 0;
const sdk_1 = require("@vue-storefront/sdk");
const sdkConfig = {
    magento: (0, sdk_1.buildModule)((sdk_1.middlewareModule), {
        apiUrl: 'http://localhost:8181/magento',
    }),
};
exports.sdk = (0, sdk_1.initSDK)(sdkConfig);
