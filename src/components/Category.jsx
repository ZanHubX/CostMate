// Category.js
import React from "react";
import useDivided from "../store/useDivided";
import Empty from "./Empty";

const Category = ({ total = 0, filteredItems = [] }) => {


  const { setTotal } = useDivided((state) => ({
    setTotal: state.setTotal,
  }));


  return (
    <div className="border-2 mt-2 border-slate-100 px-4 py-2 rounded-xl">
      <div className="flex justify-between items-center border-b mt-2 border-slate-100 px-4 py-2">
        <p className="text-slate-100 font-bold text-2xl">Total</p>
        <p className="text-slate-100 font-bold text-xl">{total.toFixed(2)} B</p>
      </div>
      <ul>
        {filteredItems.length === 0 && <Empty />}
        {filteredItems.map((item) => (
          <li
            className="flex justify-between items-center border-b mt-2 border-slate-100 px-4 py-2 last:border-none"
            key={item.id}
          >
            <p className="text-slate-100">{item.category}</p>
            <p className="text-slate-100">{item.price} B</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
