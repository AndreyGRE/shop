// src/store/useCartStore.js
import { create } from "zustand";

const useShoppingCartIsOpen = create((set) => ({
    isOpen: false,
    Open: () => set(() => ({ isOpen: true })),
    Close: () => set(() => ({ isOpen: false })),
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useShoppingCartIsOpen;