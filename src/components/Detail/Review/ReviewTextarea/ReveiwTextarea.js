import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const Textarea = styled.textarea`
  height: 10em;
  margin-bottom: 1em;
  &::placeholder {
    padding-left: 0.5em;
  }
`;

const SubmitButton = styled.button`
  width: 30em;
  border: 1px solid #fff;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.whiteColor};
  padding: 1em 0;
  cursor: pointer;
  margin: 0 auto;
`;

function ReviewTextarea({ todos, setTodos, inputText, setInputText }) {
  const [logIn, setLogIn] = useState(false);

  const inputTextHandler = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setInputText(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    logIn
      ? setTodos([
          ...todos,
          {
            writer: "Username",
            text: inputText,
            completed: false,
            id: Math.random() * 1000,
          },
        ])
      : alert(`Please Log In!`);
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