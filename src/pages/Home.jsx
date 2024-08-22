import TagLine from "../components/TagLine";
import Total from "../components/Total";
import Divided from "../components/Divided";
import Dashboard from "../components/Dashboard";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";

const Home = () => {
  return (
    <ProtectedRoute>
      <div className="container max-w-3xl mx-auto">
        <TagLine />
        <Total />
        <Divided />
        <Dashboard />
        <Toaster />
      </div>
    </ProtectedRoute>
  );
};
export default Home;
