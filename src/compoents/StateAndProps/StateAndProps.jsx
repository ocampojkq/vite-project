import React, { useState } from "react";

const StateAndProps = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [fruits, setfruits] = useState(["apple", "banana", "orange"]);
  const [isChecked, setIsChecked] = useState(false);

  const handleIncrement = () => {
    setCount((prevState) => count + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => count - 1);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value); // Update message state when typing
  };

  const handleShowFruits = () => {
    setIsChecked(!isChecked);
  };

  const handleAddFruit = () => {
    setfruits([...fruits, "hahaha", "dadadaczcz"]);
  };

  const handleRemove = (fruitIndex) => {
    const filteredFruits = fruits.filter(
      (fruits, index) => index !== fruitIndex
    );

    setfruits(filteredFruits);
  };
  return (
    <>
      <h1>counter: {count}</h1>
      <h1>hello{message}</h1>

      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>

      <input type="text" onChange={handleMessage} placeholder="Enter message" />
      <hr />

      <div>
        <label htmlFor="">Show</label>
        <input
          type="checkbox"
          onChange={handleShowFruits}
          checked={isChecked}
        />
      </div>

      <button onClick={handleAddFruit}>Add fruit</button>

      <ul className="list-group">
        {isChecked &&
          fruits.map((fruits, index) => {
            return (
              <div key={index}>
                {" "}
                <li key={index} className="list-group-item">
                  {fruits}
                </li>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(index)}
                >
                  remove
                </button>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default StateAndProps;
