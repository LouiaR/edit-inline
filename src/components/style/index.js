import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; 
  color: #f8f8f8;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  font-weight: 300;
  padding: 0 3em;

  @media  (max-width: 48em) {
    padding: 0;
  }
}
`;
