import React, { useState } from "react";
import "./App.css";
import ParentComponent from "./components/PureComponent/ParentComponent";
import RefsComponent from "./components/Refs/RefsComponent";
import FocusInput from "./components/Refs/RefsWithClassComponent/FocusInput";
import FRFocusInput from "./components/Refs/forwardRef/FRFocusInput";
import PortalDemo from "./components/Portal/PortalDemo";
import Hero from "./components/ErrorBoundary/Hero";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ClickCouter from "./components/HOC/ClickCouter";
import HoverCounter from "./components/HOC/HoverCounter";
import ComponentC from "./components/Context/ComponentC";
import { UserProvider } from "./components/Context/userContext";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowMessageClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="App">
      <h1>React Concepts</h1>
      <br />
      {/*  <ParentComponent /> */}
      {/* <RefsComponent /> */}
      {/* <FocusInput /> */}
      {/*   <FRFocusInput /> */}
      {/*  <div
        style={{
          height: "100%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleShowMessageClick}>Show Secret Modal</button>
        {showModal ? (
          <PortalDemo onClose={handleCloseModal}>
            This is the secret modal message!
          </PortalDemo>
        ) : null}
      </div> */}
      {/*   <ErrorBoundary>
        <Hero heroName="Spider Man" />
        <Hero heroName="Krissh" />
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/*    <ClickCouter name="Sunil PAtil"/>
      <HoverCounter name="Sunil PAtil"/> */}
      {/* Context  */}
      <UserProvider value="Sunil PAtil">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
