"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInCustomer = void 0;
const sdk_config_1 = require("@/sdk/sdk.config");
const headers_1 = require("next/headers");
async function signInCustomer(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const result = await sdk_config_1.sdk.magento.generateCustomerToken({
        email,
        password,
        recaptchaToken: "",
    });
    if (result.data?.generateCustomerToken?.token) {
        (0, headers_1.cookies)().set({
            name: "vsf-customer",
            value: result.data.generateCustomerToken.token,
        });
    }
}
exports.signInCustomer = signInCustomer;
