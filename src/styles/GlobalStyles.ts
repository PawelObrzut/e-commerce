import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --black-primary: hsl(0, 0%, 0%);
    --grey-secondary: hsl(0, 0%, 50%);
    --grey-light: hsl(0, 0.00%, 85.00%);
    --grey-light-2: hsl(0, 0.00%, 95.00%);
    --grey-strong: hsl(0, 0%, 75%);
    --white-primary: hsl(0, 100%, 100%);
    --fs-400: 1rem;
  }
    
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, p, figure, picture {
    margin: 0;
  }

  body {
    "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  input, button, textarea, select {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  ul, ol {
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;