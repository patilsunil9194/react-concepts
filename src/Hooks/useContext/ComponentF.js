import React, { useContext } from "react";
import { UserContext } from "../../App";

function ComponentF() {
  const user = useContext(UserContext);
  return (
    <div style={{ color: "teal" }}>
      <h3>**** Component F ****</h3>
      {user}
    </div>
  );
}

export default ComponentF;
