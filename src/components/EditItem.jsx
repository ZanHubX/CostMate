import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ItemComponent from "./ItemComponent";
import useStore from "../store/useStore";
import useNewItem from "../store/useNewItem";

const EditItem = () => {
  const { data } = useStore(); // Ensure that useStore provides setData to update the global store
  const { newEditData } = useNewItem();

  const location = useLocation();
  const navigate = useNavigate();
  const { editData: initialData } = location.state || {};

  // Use state to manage editData
  const [editData, setEditData] = useState(initialData || []); // Fallback to an empty array if initialData is undefined

  console.log(editData);
  const handleAddButton = () => {
    navigate("/");
  };

  const handleDeleteButton = (id) => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    const newData = storedData.filter((item) => item.id !== id);

    // Update localStorage
    localStorage.setItem("data", JSON.stringify(newData));

    // Update editData state
    setEditData(newData);

    // Optional: Update the global store if needed
    data.setData(newData); // Assuming setData is a method in useStore to update the global data
  };

  return (
    <div>
      <ItemComponent
        newData={editData}
        handleAddButton={handleAddButton}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  );
};

export default EditItem;
