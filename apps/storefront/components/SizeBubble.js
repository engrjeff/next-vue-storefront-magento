"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeBubble = void 0;
const useAddToCart_1 = require("@/hooks/useAddToCart");
const useCustomerCart_1 = require("@/hooks/useCustomerCart");
const utils_1 = require("@/lib/utils");
const outline_1 = require("@heroicons/react/24/outline");
const react_1 = require("react");
function SizeBubble({ product, variant }) {
    const [status, setStatus] = (0, react_1.useState)("idle");
    const addToCart = (0, useAddToCart_1.useAddToCart)();
    const customerCart = (0, useCustomerCart_1.useCustomerCart)();
    const isAvailable = variant?.product?.stock_status === "IN_STOCK";
    const sizeLabel = variant?.attributes?.find((a) => a?.code === "size")?.label;
    const variantSku = variant?.product?.sku;
    const handleAddToCart = async () => {
        if (!variantSku)
            return;
        setStatus("pending");
        await addToCart.mutateAsync({
            cartId: customerCart.data?.data?.customerCart?.id,
            cartItems: [
                {
                    parent_sku: product.sku,
                    data: { quantity: 1, sku: variantSku },
                },
            ],
        }, {
            onError(error) {
                console.log(error);
                setStatus("idle");
            },
            onSuccess() {
                setStatus("success");
                setTimeout(() => {
                    setStatus("idle");
                }, 2000);
            },
        });
    };
    return (<>
      <button type='button' onClick={handleAddToCart} title='Add to bag' disabled={status === "pending"} className={(0, utils_1.cn)("select-none border border-black h-7 w-7 flex items-center justify-center text-xs font-semibold rounded-full transition-colors duration-300 hover:text-white hover:bg-black disabled:opacity-60 disabled:pointer-events-none", {
            "opacity-60 cursor-not-allowed pointer-events-none border-border text-border": !isAvailable,
        })}>
        {status === "success" ? <outline_1.CheckIcon className='h-4 w-4'/> : sizeLabel}
      </button>
    </>);
}
exports.SizeBubble = SizeBubble;
