import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useDetectClickOutside from "./hooks/useDetectClickOutside";
import { useSubmit } from "./hooks";

const Form = styled.form`
  padding: 1em;
`;

const Input = styled.input`
  font-size: 1.8rem;
  padding: 1em;
`;

const EditableInput = ({ state }) => {
  const [input, setInput] = useState(state.text);
  const num = Math.floor(Math.random() * 9);
  const { submit } = useSubmit(input, num);
  const { inputEl } = useDetectClickOutside(submit);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submit(num);
  };

  useEffect(() => {
    if (state.isEditing) {
      inputEl.current.focus();
    }
  }, [state.isEditing, inputEl]);

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="text">
        <Input
          ref={inputEl}
          type="text"
          name="text"
          id="text"
          value={input}
          placeholder="Write your text"
          onChange={handleChange}
        />
      </label>
    </Form>
  );
};

export default EditableInput;
