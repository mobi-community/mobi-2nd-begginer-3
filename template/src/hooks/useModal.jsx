import { useState } from "react";

const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const open = () => {
    setIsModal(true);
  };
  const close = () => {
    setIsModal(false);
  };
  return [isModal, open, close];
};

export default useModal;
