import Dashboard from "./components/Dashboard";
import Divided from "./components/Divided";
import NavBar from "./components/NavBar";
import TagLine from "./components/TagLine";
import Total from "./components/Total";

const App = () => {
  return (
    <div>
      <NavBar />
      <TagLine />
      <Total />
      <Divided />
      <Dashboard />
    </div>
  );
};

export default App;
