import useStore from "../store/useStore";
import useNewItem from "../store/useNewItem";
import ItemComponent from "./ItemComponent";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Empty from "./Empty";

const NewItemList = () => {
  const navigate = useNavigate();
  const { newData } = useNewItem();
  const { data } = useStore();

  console.log(newData);

  const handleAddButton = () => {
    if (newData.length > 0) {
      useStore.setState({ data: [...data, ...newData] });
      navigate("/");
    } else {
      if (confirm("Are you sure you want to go home page?")) {
        navigate("/");
      }
    }
  };

  const handleDeleteButton = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const newDataList = newData.filter((item) => item.id !== id);
      useNewItem.setState({ newData: newDataList });

      const storedData = JSON.parse(localStorage.getItem("data")) || [];

      localStorage.setItem(
        "data",
        JSON.stringify(storedData.filter((item) => item.id !== id))
      );
    }
  };

  return (
    <div>
      <ItemComponent
        newData={newData}
        handleDeleteButton={handleDeleteButton}
        handleAddButton={handleAddButton}
      />
    </div>
  );
};

export default NewItemList;
