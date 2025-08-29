"use client";
import { create } from "zustand";

// Загружаем корзину из localStorage (только в браузере)
const loadCart = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  return [];
};

// Сохраняем корзину в localStorage (только в браузере)
const saveCart = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const useCartStore = create((set) => ({
  cart: loadCart(), // инициализация

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      let newCart;
      if (existingItem) {
        newCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...state.cart, { ...product, quantity: 1 }];
      }

      saveCart(newCart);
      return { cart: newCart };
    }),

  updateQuantity: (productId, newQuantity) =>
    set((state) => {
      if (newQuantity <= 0) {
        const newCart = state.cart.filter((item) => item.id !== productId);
        saveCart(newCart);
        return { cart: newCart };
      }

      const newCart = state.cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.min(newQuantity, 10) }
          : item
      );

      saveCart(newCart);
      return { cart: newCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      saveCart(newCart);
      return { cart: newCart };
    }),

  clearCart: () =>
    set(() => {
      saveCart([]);
      return { cart: [] };
    }),
}));

export default useCartStore;
