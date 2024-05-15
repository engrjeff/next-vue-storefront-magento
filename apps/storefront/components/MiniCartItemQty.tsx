"use client";

import { useUpdateCart } from "@/hooks/useUpdateCart";
import { cn } from "@/lib/utils";
import { MagentoTypes } from "@/types/magento.types";
import { useRef, useState } from "react";

const areDigitsOnly = (input: any) => new RegExp(/^[0-9]*$/).test(input);

export function MiniCartItemQty({
  cartItem,
  cartId,
}: {
  cartItem: MagentoTypes.Maybe<MagentoTypes.ConfigurableCartItem>;
  cartId: string;
}) {
  const updateCart = useUpdateCart();

  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  //   const [alertShown, setAlertShown] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState<string>();

  const qtyInputRef = useRef<HTMLInputElement | null>(null);
  const [qty, setQty] = useState(cartItem?.quantity);

  const hasQtyChanged = cartItem?.quantity !== qty && Boolean(qty);

  const handleUpdateCart = async () => {
    if (!cartId) return;

    setStatus("loading");

    await updateCart.mutateAsync(
      {
        cart_id: cartId,
        cart_items: [
          {
            cart_item_uid: cartItem?.uid,
            quantity: qty,
          },
        ],
      },
      {
        onSuccess() {
          setStatus("idle");
        },
        onError(error) {
          console.log(error);
          setStatus("idle");
        },
      }
    );
  };

  return (
    <fieldset
      disabled={status === "loading"}
      className='flex items-center gap-2 disabled:opacity-60'
    >
      <label htmlFor={`cart-item-${cartItem?.uid}-qty`} className='text-sm'>
        Qty:{" "}
      </label>
      <input
        id={`cart-item-${cartItem?.uid}-qty`}
        ref={qtyInputRef}
        type='number'
        min={0}
        width={45}
        value={qty}
        onChange={(e) => {
          if (!areDigitsOnly(e.currentTarget.value)) {
            e.preventDefault();
            return;
          }

          const val = e.currentTarget.valueAsNumber;

          if (val < 1) {
            return;
          }

          setQty(val);
        }}
        onWheel={(e) => {
          e.preventDefault();
          qtyInputRef.current?.blur();
        }}
        className='w-[45px] h-8 py-0 px-2 align-baseline rounded-[1px] ring-1 ring-transparent focus:border-transparent focus-visible:border-transparent appearance-none focus-visible:ring-black focus:ring-black outline-none text-center border border-[#c2c2c2] font-sans leading-[1.5]'
      />
      <button
        disabled={status === "loading"}
        onClick={handleUpdateCart}
        className={cn(
          "disabled:opacity-70 h-8 border border-[#cdcdcd] cursor-pointer bg-[#f2f2f2] hover:bg-[#e2e2e2] hover:text-[#555] font-sans font-semibold text-[11px] rounded-[3px] py-[7px] px-[15px] outline-none duration-500 transition-opacity",
          hasQtyChanged
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        Update
      </button>
    </fieldset>
  );
}
