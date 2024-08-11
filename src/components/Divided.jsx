// Divided.js
import React from "react";
import useDivided from "../store/useDivided";

const Divided = () => {
  const total = useDivided((state) => state.total);


  const setTotal = useDivided((state) => state.setTotal);

  const classes =
    "text-xl text-slate-100 border border-slate-200 p-4 rounded-2xl text-center";

  return (
    <div className="px-10 grid grid-cols-2 gap-4">
      <button className={classes}>Divided By</button>
      <input
        type="text"
        className={`${classes} bg-transparent`}
        value={`${total.toFixed(2)} THB`}
        disabled
      />
    </div>
  );
};

export default Divided;
