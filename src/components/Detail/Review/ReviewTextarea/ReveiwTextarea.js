import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { LoginAtom } from "../../../../Recoil/LoginAtom";

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
  @media screen and (max-width: 500px) {
    width: 10em;
  }
`;

function ReviewTextarea({ todos, setTodos, inputText, setInputText }) {
  const login = useRecoilValue(LoginAtom);

  const inputTextHandler = (event) => {
    const {
      target: { value },
    } = event;
    setInputText(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login
      ? setTodos([
          ...todos,
          {
            writer: "hello",
            text: inputText,
            completed: false,
            id: Math.random() * 1000,
          },
        ])
      : alert(`Please Log In!`);
    if (inputText === "") {
      alert("Please write something!!!");
      setTodos([...todos]);
    }
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
