import styled,{css} from "styled-components"

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary.purple[300]};
    color: ${({ theme }) => theme.COLORS.white};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.primary.purple[500]};
    }
  `,
};

const sizeCSS = {
  small: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    height: 40px;
    width: 100px;
  `,
  medium: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    height: 40px;
    width: 150px;
  `,
  large: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    height: 40px;
    width: 200px;
  `,
};

const shapeCSS = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 24px;
  `,
};

export const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  /* &:hover {
    opacity: 0.7;
  } */
`;