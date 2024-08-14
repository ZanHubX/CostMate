import React from "react";
import useStore from "../store/useStore";

const Divided = () => {
  const total = useStore((state) => state.total);
  const divideTotalByTwo = useStore((state) => state.divideTotalByTwo);


 

  const classes =
    "text-xl text-slate-100 border border-slate-200 p-4 rounded-2xl text-center";

  return (
    <div className="px-10 grid grid-cols-2 gap-4">
      <button
        className={classes}
        onClick={divideTotalByTwo} // Handle button click
      >
        Amount
      </button>
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

