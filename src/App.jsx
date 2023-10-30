import AttractivePlace from "./components/attractive-place/AttractivePlace";
import Home from "./components/home/Home";
import ViewPoint from "./components/view-points/ViewPoints";

const App = () => {
  return (
    <div className="font-Montserrat bg-[#001E23]">
      <Home />
      <AttractivePlace />
      <ViewPoint />
    </div>
  );
};

export default App;
