import Dashboard from "./components/Dashboard";
import Divided from "./components/Divided";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import TagLine from "./components/TagLine";
import Total from "./components/Total";

const App = () => {
  return (
    <div>
      <TagLine />
      <Total />
      <Divided />
      <Dashboard />
    </div>
  );
};

export default App;
