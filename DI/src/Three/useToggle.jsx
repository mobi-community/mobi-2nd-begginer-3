import { useState } from "react";

const useToggle = () => {
  const [isToggle, setIsToggle] = useState();

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return [isToggle, handleToggle];
};

export default useToggle;
