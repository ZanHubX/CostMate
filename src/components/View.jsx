import { useRef } from "react";
import { useState } from "react";

const View = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  );

  const dateRef = useRef(selectedDate);

  const handleChange = (e) => {
    const newDate = new Date(e.target.value).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setSelectedDate(newDate);
    dateRef.current = newDate;
  };
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center border border-slate-100 px-4 py-2 rounded-xl">
        <p className="text-slate-100">{dateRef.current}</p>
        <input
          type="date"
          className="bg-transparent text-slate-100 focus:outline-none ::-webkit-calendar-picker-indicator:bg-black"
          onChange={handleChange}
        />
      </div>
      <div></div>
    </div>
  );
};

export default View;
