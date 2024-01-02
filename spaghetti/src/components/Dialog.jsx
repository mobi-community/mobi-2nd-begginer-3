import { DialLogState } from "../contexts/DialogProvider";
import React from "react";
import { S } from "./style";

const Dialog = React.forwardRef(
  ({ type, text, onConfirm, onCancel, onClose, position }, ref) => {
    return (
      <S.Wrapper ref={ref} $position={position}>
        <button onClick={onClose}>x</button>
        {text}
        <S.Button onClick={onConfirm}>확인</S.Button>
        {type === DialLogState.CONFIRM && (
          <S.Button onClick={onCancel}>취소</S.Button>
        )}
      </S.Wrapper>
    );
  }
);
Dialog.displayName = "dialog";
export default Dialog;

