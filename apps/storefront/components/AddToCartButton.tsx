"use client";

import { useAddToCart } from "@/hooks/useAddToCart";
import { useCustomerCart } from "@/hooks/useCustomerCart";
import { cn } from "@/lib/utils";
import { MagentoTypes } from "@/types/magento.types";
import { CheckIcon } from "@heroicons/react/24/outline";
import * as React from "react";

interface AddToCartButtonProps {
  product: MagentoTypes.ConfigurableProduct;
  variant: MagentoTypes.Maybe<MagentoTypes.ConfigurableVariant>;
  onJustAddedToCart: () => void;
}

export function AddToCartButton({
  product,
  variant,
  onJustAddedToCart,
}: AddToCartButtonProps) {
  const [status, setStatus] = React.useState<"idle" | "pending" | "success">(
    "idle"
  );
  const addToCart = useAddToCart();
  const customerCart = useCustomerCart();

  const isAvailable = variant?.product?.stock_status === "IN_STOCK";

  const variantSku = variant?.product?.sku;

  const handleAddToCart = async () => {
    if (!variantSku) return;

    setStatus("pending");

    await addToCart.mutateAsync(
      {
        cartId: customerCart.data?.data?.customerCart?.id!,
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
        },
        onSuccess() {
          setStatus("success");
          onJustAddedToCart();

          setTimeout(() => {
            setStatus("idle");
          }, 2000);
        },
      }
    );
  };

  return (
    <>
      <button
        type='button'
        onClick={handleAddToCart}
        disabled={status === "pending"}
        title='Add to bag'
        className={cn(
          "bg-uigreen text-white select-none text-sm font-bold w-full h-9 flex items-center justify-center px-4 py-2 uppercase hover:bg-opacity-90 disabled:opacity-40",
          { "opacity-40 cursor-not-allowed": !isAvailable }
        )}
      >
        {status === "success" ? (
          <CheckIcon className='h-4 w-4' />
        ) : (
          "Add To Bag"
        )}
      </button>
    </>
  );
}
