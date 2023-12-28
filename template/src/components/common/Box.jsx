import styled from "styled-components";

const Box = ({ width, height, backgroundColor, border, children }) => {
  return (
    <S.Wrapper
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      border={border}
    >
      {children}
    </S.Wrapper>
  );
};

export default Box;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : "100")}px;
  height: ${({ height }) => (height ? height : "100")}px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "transparent"};
  border: ${({ border }) => (border ? border : "none")};
`;

const S = {
  Wrapper,
};
