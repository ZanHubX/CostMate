import EditItem from "./EditItem";
import NewItemAdd from "./NewItemAdd";

const EditModal = () => {
  return (
    <div className="p-10">
      <NewItemAdd />
      <EditItem />
    </div>
  );
};

export default EditModal;
