import { create } from "zustand";

export type WishlistUIStatus = "idle" | "pending" | "success";

interface WishlistUIState {
  status: WishlistUIStatus;
  setStatus: (status: WishlistUIStatus) => void;
}

export const useWishlistUIState = create<WishlistUIState>((set) => ({
  status: "idle",
  setStatus: (status) => set({ status }),
}));
