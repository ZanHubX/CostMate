import React from "react";
import useStore from "../store/useStore";

const Total = () => {
  const total = useStore((state) => state.total);
  

  return (
    <section className="px-10 py-6">
      <h1 className="text-slate-200 text-2xl mb-3 px-4">Total Amount - </h1>
      <h1 className="text-center text-slate-50 text-4xl">
        {total.toFixed(2)} THB
      </h1>
    </section>
  );
};

export default Total;
