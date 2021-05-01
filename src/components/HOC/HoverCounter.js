import React from "react";
import withCounter from "./withCounter";

function HoverCounter({ increateCount, name, count }) {
  return (
    <div>
      <h2 onMouseOver={increateCount}>
        {" "}
        {name} Hovered {count} times
      </h2>
    </div>
  );
}

export default withCounter(HoverCounter,10);
