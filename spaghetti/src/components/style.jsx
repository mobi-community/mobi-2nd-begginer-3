import styled from "styled-components";

const Wrapper = styled.dialog`
  width: 400px;
  position: absolute;
  left: ${({ $position }) => $position.x}%;
  top: ${({ $position }) => $position.y}%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  border: 1px solid #888;
  ::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Button = styled.button`
  padding: 8px;
`;

const BackDrop = styled.div`
  width: 100%;
`;

export const S = {
  Wrapper,
  Button,
  BackDrop,
};
