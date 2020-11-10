import React, { useState } from "react";
import { GlobalStyle } from "./components/style";
import styled from "styled-components";

import CoyoteLogo from "./assets/CSoftware_logo_Neg.svg";
import { AppContextProvider } from "./components/hooks";

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
  const initialState = {
    text: "Hello World",
    message: "",
    isEditing: false,
    error: false,
    isLoading: false,
  };

  const [state, setState] = useState(initialState);
  return (
    <AppContextProvider value={{ state, setState }}>
    <GlobalStyle />
    <Logo src={CoyoteLogo} alt="logo" />
  </AppContextProvider>
  );
}

export default App;
