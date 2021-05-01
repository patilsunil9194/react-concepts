import React from "react";
import withCounter from "./withCounter";

const ClickCouter = ({ increateCount, name, count }) => {
  return (
    <div>
      <button onClick={increateCount}>
        {name} Clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCouter,3);
