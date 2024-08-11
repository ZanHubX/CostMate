import { create } from "zustand";

const useDivided = create((set) => ({
  total: 0,
  filteredItems: [],
  setTotal: (newTotal) => set({ total: newTotal }),
  setFilteredItems: (items) => set({ filteredItems: items }),
}));

export default useDivided;
