import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    font-family: ${(props) => props.theme.fonts.text}; 
    color: ${(props) => props.theme.colors.dark_grey};

    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
`;

export default GlobalStyle;
