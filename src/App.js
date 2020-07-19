import React from "react";
import "./App.css";
import LeftPanel from "./components/left-panel/LeftPanel";
import RightPanel from "./components/right-panel/RightPanel";

function App() {
  return (
    <div className="App">
      <div className="app__grid">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
