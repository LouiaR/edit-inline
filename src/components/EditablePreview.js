import React from "react";
import styled from "styled-components";

import Spinner from "./style/spinner";
import { ReactComponent as CheckMark } from "../assets/checkMark.svg";

const Copy = styled.div`
  font-size: 2rem;
  color: #0f3e82;
  cursor: pointer;
  position: relative;

  svg {
    margin-left: 2em;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  background: #0c0c0c;
  display: flex;
  width: 30px;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
}
`;

const EditablePreview = ({ state, setState }) => {
  const content = state.text || "Click text to edit";

  const showSpinner = state.isLoading && (
    <span
      onClick={() => setState((prevState) => ({ ...prevState, error: false }))}
    >
      <Spinner />
    </span>
  );

  const showCheckMark = state.message === "success" && (
    <span>
      <CheckMark />
    </span>
  );

  const showError = state.error && (
    <div>
      {state.message} <Icon>x</Icon>
    </div>
  );

  return (
    <Copy
      onClick={() =>
        setState((prevState) => ({ ...prevState, isEditing: true }))
      }
      title="Click text to edit"
    >
      <div>
        {content}
        {showSpinner}
        {showCheckMark}
      </div>
      {showError}
    </Copy>
  );
};

export default EditablePreview;
