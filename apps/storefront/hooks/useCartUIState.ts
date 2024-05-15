import { create } from "zustand";

export type CartUIStatus = "idle" | "pending" | "success";

interface CartUIState {
  status: CartUIStatus;
  setStatus: (status: CartUIStatus) => void;
}

export const useCartUIState = create<CartUIState>((set) => ({
  status: "idle",
  setStatus: (status) => set({ status }),
}));
