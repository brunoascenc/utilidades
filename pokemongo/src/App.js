import "./App.css";
import Home from "./components/Home";
import { DataProvider } from "./data/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Home />
      </div>
    </DataProvider>
  );
}

export default App;
