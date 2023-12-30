import { useState } from "react";

const useCounter = ({ max, min, initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count < max) setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > min) {
      setCount((prev) => prev - 1);
    }
  };

  return { increment, decrement, count };
};

export default useCounter;
