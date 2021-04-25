import React from "react";
import "./App.css";
import ParentComponent from "./components/PureComponent/ParentComponent";
import RefsComponent from "./components/Refs/RefsComponent";

function App() {
  
  return (
    <div className="App">
      <h1>React Concepts</h1>
     {/*  <ParentComponent /> */}
     <RefsComponent />
    </div>
  );
}

export default App;
