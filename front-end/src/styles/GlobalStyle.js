import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 16px; 
    font-family: "Noto Sans KR", sans-serif;
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.gray600};
  }
  input {
    font-family: "Noto Sans KR", sans-serif; 
    vertical-align: middle;
    outline: none;
  }
  button {
    font: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }
  ol, ul { 
    list-style: none;
  }
  a { 
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

export default GlobalStyle;
