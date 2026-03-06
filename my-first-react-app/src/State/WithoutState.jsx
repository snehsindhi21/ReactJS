import React from "react";

const WithoutState = () => {

  let count = 0;

  //! increment function
  let incrementCount = () => {
    count++;
    console.log("Count:", count);
  };

  //! decrement function
  let decrementCount = () => {
    count--;
    console.log("Count:", count);
  };

  //! reset function
  let resetCount = () => {
    count = 0;
    console.log("Count:", count);
  };

  return (
    <>
      <h2>WithoutState Demo</h2>

      <h3>Count: {count}</h3>

      <button onClick={incrementCount}>
        Increment Count
      </button> &nbsp;

      <button onClick={decrementCount}>
        Decrement Count
      </button> &nbsp;

      <button onClick={resetCount}>
        Reset Count
      </button> &nbsp;
    </>
  );
};

export default WithoutState;