/// <reference types="react" />
export declare const SdkProvider: ({ children }: {
    children: import("react").ReactNode;
}) => JSX.Element, useSdk: () => import("@vue-storefront/sdk").SDKApi<{
    magento: {
        connector: import("@vue-storefront/sdk").Methods<import("@vue-storefront/middleware").WithoutContext<typeof import("@vue-storefront/magento-api/lib/api")>>;
        context: {
            requestSender: import("@vue-storefront/sdk").RequestSender;
        };
    } & object;
}>;
//# sourceMappingURL=sdk.d.ts.map