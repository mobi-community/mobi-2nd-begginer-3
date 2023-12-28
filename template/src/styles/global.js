import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
  }
  body {
    background-color: #FFFFFF;
    font-family: 'SUIT', sans-serif;
  }
`;

export default GlobalStyles;
