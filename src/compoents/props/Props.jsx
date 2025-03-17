import React from "react";

const Props = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => handleIncrement()} className="btn btn-success">
        Increment
      </button>
      <button onClick={() => handleDecrement()} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};

export default Props;
