"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddToCart = void 0;
const addToCart_1 = require("@/services/mutations/addToCart");
const react_query_1 = require("@tanstack/react-query");
function useAddToCart() {
    const queryClient = (0, react_query_1.useQueryClient)();
    const guestCartId = localStorage.getItem("vsf-cart");
    return (0, react_query_1.useMutation)({
        mutationKey: ["add-to-cart"],
        mutationFn: addToCart_1.addToCart,
        async onSuccess() {
            if (!guestCartId) {
                await queryClient.invalidateQueries({
                    queryKey: ["customer-cart"],
                });
            }
            await queryClient.invalidateQueries({
                queryKey: ["guest-cart"],
            });
        },
    });
}
exports.useAddToCart = useAddToCart;
