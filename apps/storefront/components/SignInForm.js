"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@storefront-ui/react");
const sdk_config_1 = require("@/sdk/sdk.config");
const react_query_1 = require("@tanstack/react-query");
const js_cookie_1 = __importDefault(require("js-cookie"));
const react_2 = require("react");
function SignInForm() {
    const queryClient = (0, react_query_1.useQueryClient)();
    const [isLoading, setIsLoading] = (0, react_2.useState)(false);
    return (<div className='py-20'>
      <h1 className='text-lg text-center font-semibold'>Sign In</h1>
      <form onSubmit={async (e) => {
            e.preventDefault();
            setIsLoading(true);
            const formData = new FormData(e.currentTarget);
            const email = formData.get("email");
            const password = formData.get("password");
            const result = await sdk_config_1.sdk.magento.generateCustomerToken({
                email,
                password,
                recaptchaToken: "",
            });
            if (result.data?.generateCustomerToken?.token) {
                js_cookie_1.default.set("vsf-customer", result.data.generateCustomerToken.token);
                const guestCartId = localStorage.getItem("vsf-cart");
                if (guestCartId) {
                    const customerCart = await sdk_config_1.sdk.magento.customerCart();
                    const customerCartId = customerCart.data.customerCart.id;
                    if (customerCartId) {
                        await sdk_config_1.sdk.magento.mergeCarts({
                            destinationCartId: customerCartId,
                            sourceCartId: guestCartId,
                        });
                        localStorage.removeItem("vsf-cart");
                        await queryClient.invalidateQueries({
                            queryKey: ["customer-cart"],
                        });
                    }
                }
            }
            setIsLoading(false);
        }} className='space-y-3'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='email'>Email</label>
          <react_1.SfInput type='email' name='email' id='email' placeholder='Email'/>
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='password'>Password</label>
          <react_1.SfInput type='password' name='password' id='password' placeholder='Password'/>
        </div>

        <div className='flex flex-col space-y-2 pt-4'>
          <react_1.SfButton type='submit' disabled={isLoading}>
            {isLoading ? "Loading" : "Sign In"}
          </react_1.SfButton>
        </div>
      </form>
    </div>);
}
exports.default = SignInForm;
