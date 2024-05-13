'use client';
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSdk = exports.SdkProvider = void 0;
const client_1 = require("@vue-storefront/next/client");
const sdk_config_1 = require("./sdk.config");
_a = (0, client_1.createSdkContext)(sdk_config_1.sdk), exports.SdkProvider = _a[0], exports.useSdk = _a[1];
