import { create } from "zustand";

const useEditItem = create((set) => ({
  newEditData: [],
  setEditData: (data) => set({ newEditData: data }),
  addEditItem: (item) =>
    set((state) => ({ newEditData: [...state.newEditData, item] })),
}));

export default useEditItem;
