import { create } from "zustand";

const useNewItem = create((set) => ({
  newData: [],
  addNewItem: (item) => set((state) => ({ newData: [...state.newData, item] })),
}));

export default useNewItem;
