import styled from "styled-components";

const BasicButton = ({ children, width, height, disabled, ...props }) => {
  return (
    <S.ButtonWrapper
      width={width}
      height={height}
      disabled={disabled}
      {...props}
    >
      {children}
    </S.ButtonWrapper>
  );
};
export default BasicButton;

const ButtonWrapper = styled.div`
  width: ${({ width }) => (width ? width : "100")}px;
  height: ${({ height }) => (height ? height : "40")}px;
`;

const S = {
  ButtonWrapper,
};
