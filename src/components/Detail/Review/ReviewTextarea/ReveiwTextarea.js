import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Textarea = styled.textarea`
  width: 30em;
  height: 10em;
  margin-bottom: 1em;
`;

const SubmitButton = styled.button`
  width: 30em;
  border: 1px solid #fff;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.whiteColor};
  padding: 1em 0;
  cursor: pointer;
`;

function ReviewTextarea({ todos, setTodos, inputText, setInputText }) {
  const inputTextHandler = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setInputText(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <InputContainer>
      <Textarea
        value={inputText}
        onChange={inputTextHandler}
        placeholder="Write your comments..."
        type="text"
      />
      <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
    </InputContainer>
  );
}

export default ReviewTextarea;
