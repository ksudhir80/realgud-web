import { create } from "zustand";

interface ProductStore {
  selectedProduct: string;
  setSelectedProduct: (
    value: string
  ) => void;
}

export const useProductStore =
  create<ProductStore>((set) => ({
    selectedProduct: "",

    setSelectedProduct: (
      value
    ) =>
      set({
        selectedProduct: value
      })
  }));