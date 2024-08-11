import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  total: 0,

  addItem: (item) =>
    set((state) => {
      const newData = [...state.data, item];
      return { data: newData };
    }),

  setTotal: (total) => set({ total }),

  divideTotalByTwo: () => set((state) => ({ total: state.total / 2 })),
}));

export default useStore;
