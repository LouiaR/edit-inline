import React from "react";
import styled from "styled-components";

import EditableInput from "./EditableInput";
import EditablePreview from "./EditablePreview";
import { useAppContext } from "./hooks";

const Container = styled.div`
  margin: 0 auto;
  background-color: #f4f5f7;
  height: 100vh;
  position: relative;
  padding: 1em;
  margin-bottom: 3em;
`;

const Wrapper = styled.div`
  margin-top: 4em;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Editable = () => {
  const { state, setState } = useAppContext();

  return (
    <Container>
      <Wrapper>
        {state.isEditing ? (
          <EditableInput state={state} setState={setState} />
        ) : (
          <EditablePreview state={state} setState={setState} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Editable;
