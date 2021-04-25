import React from "react";
import "./App.css";
import ParentComponent from "./components/PureComponent/ParentComponent";
import RefsComponent from "./components/Refs/RefsComponent";
import FocusInput from "./components/Refs/RefsWithClassComponent/FocusInput";
import FRFocusInput from "./components/Refs/forwardRef/FRFocusInput";

function App() {
  return (
    <div className="App">
      <h1>React Concepts</h1>
      {/*  <ParentComponent /> */}
      {/* <RefsComponent /> */}
      {/* <FocusInput /> */}
      <FRFocusInput />
    </div>
  );
}

export default App;
