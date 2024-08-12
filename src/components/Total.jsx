import React, { useEffect, useState } from "react";
import useStore from "../store/useStore";

const Total = () => {
  const { data } = useStore();


  const storedData = JSON.parse(localStorage.getItem("data")) || [];
  const [total,setTotal] = useState(
    storedData.reduce((sum, item) => sum + item.price, 0)
  );

  useEffect(() => {
    
    localStorage.setItem("data", JSON.stringify(data));
    setTotal(data.reduce((sum, item) => sum + item.price, 0));
  }, [data]);

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
