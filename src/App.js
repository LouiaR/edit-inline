import React from "react";
import { GlobalStyle } from "./components/style";
import styled from "styled-components";

import CoyoteLogo from "./assets/CSoftware_logo_Neg.svg";

const Logo = styled.img`
  padding: 1em 0;
  display: inline-block;
  text-decoration: none;
  img {
    width: 11em;
  }

  @media (max-width: 48em) {
    padding: 1em;
  }
`;

function App() {
  return (
    <div className="App">
       <GlobalStyle />
       <Logo src={CoyoteLogo} alt="logo" />
    </div>
  );
}

export default App;
