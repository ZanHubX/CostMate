import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Modal from "../components/Modal";
import MainLayout from "../components/MainLayout";

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
    ],
  },
]);

export default router;
