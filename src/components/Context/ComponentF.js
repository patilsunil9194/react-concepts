import React from "react";
import { UserConsumer } from "./userContext";

function ComponentF() {
  return (
    <UserConsumer>
      {(username) => (
        <div>
          <h3>Component F</h3>
          {username}
        </div>
      )}
    </UserConsumer>
  );
}

export default ComponentF;
