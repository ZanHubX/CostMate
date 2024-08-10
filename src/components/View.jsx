import { useEffect, useRef } from "react";
import { useState } from "react";
import useStore from "../store/useStore";

const View = () => {
  const { data } = useStore();
  const storedData = JSON.parse(localStorage.getItem("data")) || [];

  const [allData, setAllData] = useState(storedData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    setAllData(data); // Set allData to the latest data from the store
  }, [data]); // Listen to changes in data, not storedData

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  });

  const handleChange = (e) => {
    const newDate = new Date(e.target.value).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setSelectedDate(newDate);
  };

  const total = (prices) => {
    return prices.reduce((acc, price) => acc + price, 0);
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center border border-slate-100 px-4 py-2 rounded-xl bg-gradient-to-r from-default via-stone-400 to-stone-900">
        <p className="text-slate-100 font-bold text-xl">{selectedDate}</p>
        <input
          type="date"
          className="bg-transparent text-slate-100 focus:outline-none ::-webkit-calendar-picker-indicator:bg-black"
          onChange={handleChange}
        />
      </div>
      <div>
        <ul className="mt-5 p-3 rounded-lg border border-slate-200">
          <div className="flex justify-between items-center border-b border-slate-100 py-2">
            <h3 className="text-slate-100 text-xl font-bold">Total</h3>
            <p className="text-slate-50 text-xl">
              {total(
                allData
                  .filter((item) => item.date == selectedDate)
                  .map((item) => item.price)
              )}{" "}
              B
            </p>
          </div>
          {allData
            .filter((item) => item.date == selectedDate)
            .map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b border-slate-100  py-2"
              >
                <p className="text-slate-100">{item.category}</p>
                <p className="text-slate-100">{item.price} B</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default View;
