"use client";
import { create } from "zustand";

const useAddressPrice = create((set) => ({
    addressPrice: [], // Переименовано в camelCase
    setAddressPrice: (element) => set({ addressPrice: element }), // Функция для обновления состояния
    clearAddressPrice: () => set({ AddressPrice: [] }), // Дополнительный метод для очистки
}));

export default useAddressPrice;
