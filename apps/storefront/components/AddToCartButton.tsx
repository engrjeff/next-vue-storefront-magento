"use client";

import { cn } from "@/lib/utils";
import { MagentoTypes } from "@/types/magento.types";
import { CheckIcon } from "@heroicons/react/24/outline";
import * as React from "react";

interface SizeBubbleProps {
  product: MagentoTypes.ConfigurableProduct;
  variant: MagentoTypes.Maybe<MagentoTypes.ConfigurableVariant>;
}

export function AddToCartButton({ product, variant }: SizeBubbleProps) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">(
    "idle"
  );
  const isAvailable = variant?.product?.stock_status === "IN_STOCK";

  const handleAddToCart = async () => {};

  return (
    <>
      <button
        type='button'
        onClick={handleAddToCart}
        disabled={status === "loading"}
        title='Add to bag'
        className={cn(
          "bg-[#32997d] text-white select-none text-sm font-bold w-full h-9 flex items-center justify-center px-4 py-2 uppercase hover:bg-opacity-90 disabled:opacity-40",
          { "opacity-40 cursor-not-allowed": !isAvailable }
        )}
      >
        {status === "done" ? <CheckIcon className='h-4 w-4' /> : "Add To Bag"}
      </button>
    </>
  );
}
