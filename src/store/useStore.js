import { create } from "zustand";

const useStore = create((set) => ({
  data: [],

  addItem: (item) => set((state) => ({ data: [...state.data, item] })),
}));

export default useStore;
