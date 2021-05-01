import React, { useState } from "react";

const withCounter = (WrappComponent, increamentNumber=1) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);
    const increateCount = () => {
      setCount((previousCount) => previousCount + increamentNumber);
    };
    return (
      <WrappComponent count={count} increateCount={increateCount} {...props} />
    );
  };
  return WithCounter;
};

export default withCounter;
