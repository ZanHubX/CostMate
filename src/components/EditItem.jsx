import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ItemComponent from "./ItemComponent";
import useEditItem from "../store/useEditItem";

const EditItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { newEditData } = useEditItem();

  console.log(newEditData);

  const handleAddButton = () => {
    navigate("/");
  };

  const handleDeleteButton = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const newDataList = newEditData.filter((item) => item.id !== id);
      useEditItem.setState({ newEditData: newDataList });

      const storedData = JSON.parse(localStorage.getItem("data")) || [];

      localStorage.setItem(
        "data",
        JSON.stringify(storedData.filter((item) => item.id !== id))
      );
    }

    // TODO: will use later
    // useStore.setState({ data: newDataList }); // Update data state
    // localStorage.setItem("data", JSON.stringify(newDataList)); // Update local storage
  };

  return (
    <div>
      <ItemComponent
        newData={newEditData}
        handleAddButton={handleAddButton}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  );
};

export default EditItem;
