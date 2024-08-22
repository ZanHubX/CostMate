import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "create",
        element: <CreateTask />,
      },
      {
        path: "edit",
        element: <EditTask />,
      },
    ],
  },
]);

export default router;
