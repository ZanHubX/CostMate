import useStore from "../store/useStore";
import useNewItem from "../store/useNewItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewItemList = () => {
  const { newData } = useNewItem();
  const { data } = useStore();

  const handleAddButton = () => {
    if (newData.length > 0) {
      useStore.setState({ data: [...data, ...newData] });
      localStorage.setItem("data", JSON.stringify([...data, ...newData]));
    }

    // Reset newData List to initial State
    newData.length = 0;
  };

  const handleDeleteButton = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const newDataList = newData.filter((item) => item.id !== id);
      useNewItem.setState({ newData: newDataList });
    }

    // TODO: will use later
    // useStore.setState({ data: newDataList }); // Update data state
    // localStorage.setItem("data", JSON.stringify(newDataList)); // Update local storage
  };

  // console.log(newData);

  return (
    <div className="border border-slate-100 p-4 rounded-xl mt-8">
      <div className="border border-slate-200 p-3 rounded-xl">
        <ul>
          {newData.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b border-slate-100  py-2"
            >
              <p className="text-slate-100 text-[18px]">{item.category}</p>
              <div className="flex gap-3 text-slate-100">
                <p className="text-[18px]">{item.price} B</p>
                <button className="text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button
                  className="text-red-600"
                  onClick={() => handleDeleteButton(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-slate-50 text-right mt-3 mr-6 text-xl">
          Total - {newData.reduce((acc, item) => acc + item.price, 0)} B
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <Link
          to={"/"}
          onClick={handleAddButton}
          className="bg-green-700 text-slate-100 px-4 py-2 rounded-xl text-center"
        >
          Save
        </Link>
        <Link
          to={"/"}
          className="bg-red-700 text-slate-100 px-4 py-2 rounded-xl text-center"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default NewItemList;
