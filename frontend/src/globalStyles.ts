import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #6f2dbd;
    --second-color: #5e6472;
    --body-color: #e2e2e2;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.6rem;
    background-color: var(--body-color);
  }

  a {
    text-decoration: none;
  }

`;
 
export default GlobalStyle;