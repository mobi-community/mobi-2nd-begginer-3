import { createContext, useContext, useEffect, useRef, useState } from "react";
import Dialog from "../components/_common/Dialog";
import { DIALOG_STATE } from "../constants/Constant";

const DiaLogContext = createContext();

export const useDiaLogStore = () => useContext(DiaLogContext);

const DialogProvider = ({ children }) => {
  const diaLogRef = useRef();
  const [diaLogAttribute, setDiaLogAttribute] = useState({
    type: DIALOG_STATE.ALERT,
    text: "",
    isOpen: false,
    onConfirm: () => {},
    onCancel: () => {},
    position: {
      x: 50,
      y: 10,
    },
  });

  useEffect(() => {
    if (diaLogAttribute.isOpen) return diaLogRef.current.showModal();
    diaLogRef.current.close();
  }, [diaLogAttribute.isOpen]);

  const setKeepPrevDialogAttribute = async (args) => {
    setDiaLogAttribute((prev) => ({
      ...prev,
      ...args,
    }));
  };

  const onCloseDiaLog = () => {
    setDiaLogAttribute((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <DiaLogContext.Provider
      value={[diaLogAttribute, setKeepPrevDialogAttribute]}
    >
      {children}
      <Dialog
        {...{ ...diaLogAttribute }}
        ref={diaLogRef}
        onClose={onCloseDiaLog}
      />
    </DiaLogContext.Provider>
  );
};
export default DialogProvider;
