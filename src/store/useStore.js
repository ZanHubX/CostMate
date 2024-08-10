import { create } from "zustand";

const useStore = create((set) => ({
  data: [
    {
      id: 1,
      date: "09 Aug 2024",
      category: "Mohinga",
      price: 25.5,
    },
    {
      id: 2,
      date: "10 Aug 2024",
      category: "Ohn no khao swè",
      price: 18.75,
    },
    {
      id: 3,
      date: "11 Aug 2024",
      category: "Lahpet thoke",
      price: 32.0,
    },
    {
      id: 4,
      date: "11 Aug 2024",
      category: "mala xiang guo",
      price: 69.0 
    },
  ],
}));

export default useStore;
