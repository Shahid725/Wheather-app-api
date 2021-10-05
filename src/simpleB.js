import React, { useState } from "react";

const Simpl = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Deacrease
      </button>
    </div>
  );
};

export default Simpl;
