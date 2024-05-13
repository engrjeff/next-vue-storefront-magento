"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMergeCart = exports.useGuestCart = exports.useCustomerCart = void 0;
const sdk_config_1 = require("@/sdk/sdk.config");
const react_query_1 = require("@tanstack/react-query");
function useCustomerCart() {
    return (0, react_query_1.useQuery)({
        queryKey: ["customer-cart"],
        queryFn: () => sdk_config_1.sdk.magento.customerCart(),
    });
}
exports.useCustomerCart = useCustomerCart;
function useGuestCart() {
    const guestCartId = localStorage.getItem("vsf-cart");
    return (0, react_query_1.useQuery)({
        queryKey: ["guest-cart", guestCartId],
        queryFn: () => sdk_config_1.sdk.magento.cart(guestCartId),
        enabled: Boolean(guestCartId),
    });
}
exports.useGuestCart = useGuestCart;
function useMergeCart(customerCartId) {
    const queryClient = (0, react_query_1.useQueryClient)();
    const guestCartId = localStorage.getItem("vsf-cart");
    return (0, react_query_1.useMutation)({
        mutationKey: ["merge-cart"],
        mutationFn: () => sdk_config_1.sdk.magento.mergeCarts({
            sourceCartId: guestCartId,
            destinationCartId: customerCartId,
        }),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ["customer-cart"],
            });
            localStorage.removeItem("vsf-cart");
        },
    });
}
exports.useMergeCart = useMergeCart;
