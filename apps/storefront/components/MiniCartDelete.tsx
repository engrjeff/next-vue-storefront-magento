"use client";

import { useRemoveFromCart } from "@/hooks/useRemoveFromCart";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useState } from "react";

export function MiniCartDelete({
  cartItemUid,
  cartId,
}: {
  cartItemUid: string;
  cartId: string;
}) {
  const removeFromCart = useRemoveFromCart();
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [alertShown, setAlertShown] = useState(false);

  const handleRemoveCartItem = async () => {
    if (!cartId) return;

    if (!cartItemUid) return;

    setStatus("loading");

    await removeFromCart.mutateAsync(
      {
        cart_id: cartId,
        cart_item_uid: cartItemUid,
      },
      {
        onError(error) {
          console.log(error);
          setStatus("idle");
        },
        onSuccess() {
          setStatus("done");
        },
      }
    );
  };

  return (
    <AlertDialog.Root open={alertShown} onOpenChange={setAlertShown}>
      <AlertDialog.Trigger asChild>
        <button title='Remove item' disabled={status === "loading"}>
          <span className='sr-only'>Remove item</span>
          <TrashIcon className='h-4 w-4 text-neutral-700' />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className='bg-[#3333338C] data-[state=open]:animate-overlayShow fixed inset-0 z-30' />
        <AlertDialog.Content className='p-0 data-[state=open]:animate-contentShow rounded-none fixed top-[25%] left-[50%] max-h-[85vh] w-[360px] max-w-[500px] translate-x-[-50%] translate-y-[-25%] bg-white shadow-[0_0_12px_2px_rgba(0,_0,_0,_0.35)] focus:outline-none z-40'>
          <div className='px-[30px] pt-[30px] pb-3 relative'>
            <AlertDialog.Title className='hidden m-0 text-[26px] pb-[11px] normal-case font-sans font-light border-b border-b-[#c1c1c1]'>
              Attention
            </AlertDialog.Title>
            <button
              onClick={() => {
                setAlertShown(false);
              }}
              className='absolute top-0 right-0 p-[11px] text-[#8f8f8f] hover:text-black transition-colors'
            >
              <span className='sr-only'>close</span>
              <span className='inline-flex items-center justify-center w-8 h-8'>
                <XMarkIcon className='w-5 h-5' />
              </span>
            </button>
          </div>

          <div className='px-[30px] text-[15xpx]'>
            <p>
              Are you sure you would like to remove this item from the shopping
              cart?
            </p>
          </div>
          <div className='p-[30px] space-x-2'>
            <AlertDialog.Cancel asChild>
              <button
                disabled={status === "loading"}
                className='disabled:opacity-70 border border-[#cdcdcd] cursor-pointer bg-[#f2f2f2] hover:bg-[#e2e2e2] hover:text-[#555] font-sans outline-none duration-500 transition-opacity rounded-[3px] py-[7px] px-[15px] text-[15px] font-bold'
              >
                Cancel
              </button>
            </AlertDialog.Cancel>
            <button
              onClick={handleRemoveCartItem}
              disabled={status === "loading"}
              className='disabled:opacity-70 bg-uigreen cursor-pointer rounded-[3px] py-[7px] px-[15px] text-[15px] hover:bg-[#659b8d] text-white font-bold'
            >
              OK
            </button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
