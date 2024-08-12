import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Modal from "../components/Modal";
import MainLayout from "../components/MainLayout";
import EditItem from "../components/EditItem";
import EditModal from "../components/EditModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "create",
        element: <Modal />,
      },
      {
        path: "edit",
        element: <EditModal />,
      },
    ],
  },
]);

export default router;
