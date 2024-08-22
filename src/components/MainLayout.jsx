import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <main className="container max-w-3xl mx-auto">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
