import { create } from "zustand";

const useStore = create((set) => ({
  data: [
    {
      id: 1,
      date: "2024-08-09",
      category: "Mohinga",
      price: 25.5,
    },
    {
      id: 2,
      date: "2024-08-10",
      category: "Ohn no khao swè",
      price: 18.75,
    },
    {
      id: 3,
      date: "2024-08-11",
      category: "Lahpet thoke",
      price: 32.0,
    },
  ],
}));

export default useStore;
