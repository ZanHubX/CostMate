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

  return (
    <div>
      <ItemComponent newData={editData} />
    </div>
  );
};

export default EditItem;
