import { create } from "zustand";

const useSearchProd = create((set) => ({
  searchProd: [], // Переименовано в camelCase
  setSearchProd: (products) => set({ searchProd: products }), // Функция для обновления состояния
  clearSearchProd: () => set({ searchProd: [] }), // Дополнительный метод для очистки
}));

export default useSearchProd;