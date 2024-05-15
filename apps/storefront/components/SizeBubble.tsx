"use client";

import { useAddToCart } from "@/hooks/useAddToCart";
import { useCart } from "@/hooks/useCart";
import { useCartUIState } from "@/hooks/useCartUIState";
import { cn } from "@/lib/utils";
import { MagentoTypes } from "@/types/magento.types";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface SizeBubbleProps {
  product: MagentoTypes.ConfigurableProduct;
  variant: MagentoTypes.Maybe<MagentoTypes.ConfigurableVariant>;
  onJustAddedToCart: () => void;
}

export function SizeBubble({
  product,
  variant,
  onJustAddedToCart,
}: SizeBubbleProps) {
  const [status, setStatus] = useState<"idle" | "pending" | "success">("idle");
  const addToCart = useAddToCart();
  const customerCart = useCart();
  const cartUI = useCartUIState();

  const isAvailable = variant?.product?.stock_status === "IN_STOCK";

  const sizeLabel = variant?.attributes?.find((a) => a?.code === "size")?.label;

  const variantSku = variant?.product?.sku;

  const cartId = customerCart?.data?.id;

  const handleAddToCart = async () => {
    if (!variantSku) return;

    setStatus("pending");
    cartUI.setStatus("pending");

    await addToCart.mutateAsync(
      {
        cartId: cartId!,
        cartItems: [
          {
            parent_sku: product.sku,
            data: { quantity: 1, sku: variantSku },
          },
        ],
      },
      {
        onError(error) {
          console.log(error);
          setStatus("idle");
          cartUI.setStatus("idle");
        },
        onSuccess() {
          setStatus("success");
          cartUI.setStatus("success");
          onJustAddedToCart();

          setTimeout(() => {
            setStatus("idle");
            cartUI.setStatus("idle");
          }, 3000);
        },
      }
    );
  };

  return (
    <>
      <button
        type='button'
        onClick={handleAddToCart}
        title='Add to bag'
        disabled={status === "pending"}
        className={cn(
          "select-none border border-black h-7 w-7 flex items-center justify-center text-xs font-semibold rounded-full transition-colors duration-300 hover:text-white hover:bg-black disabled:opacity-60 disabled:pointer-events-none",
          {
            "opacity-60 cursor-not-allowed pointer-events-none border-border text-border":
              !isAvailable,
          }
        )}
      >
        {status === "success" ? <CheckIcon className='h-4 w-4' /> : sizeLabel}
      </button>
    </>
  );
}
