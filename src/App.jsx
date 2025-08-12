import "./App.css";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="flex">
      <div className="w-1/5 bg-gray-300">
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-200">
        <Body />
      </div>
    </div>
  );
}

export default App;
