import { create } from "zustand";

const useEditItem = create((set) => ({
  newEditData: [],
  addEditItem: (item) =>
    set((state) => ({ newEditData: [...state.newEditData, item] })),
}));

export default useEditItem;
