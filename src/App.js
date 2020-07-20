import React from "react";
import "./App.css";
import LeftPanel from "./components/left-panel/LeftPanel";
import RightPanel from "./components/right-panel/RightPanel";

function App() {
  return (
    <div className="App">
      <div className="app__grid">
        <LeftPanel className="app__leftPanel" />
        <RightPanel className="app__rightPanel" />
      </div>
    </div>
  );
}

export default App;
