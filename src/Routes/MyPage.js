import React from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 7em auto;
  padding: 3em;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const LoginInput = styled.input`
  padding: 1em;
  margin: 0.5em 0;
  border: none;
  outline: none;
  background-color: ${(props) => props.buttonBgColor && props.theme.bgColor};
  box-shadow: ${(props) => props.buttonShadow && props.theme.boxShadow};
  color: ${(props) => props.buttonColor && props.theme.whiteColor};
  border-radius: 0.5em;
  cursor: ${(props) => props.buttonCursor && "pointer"};
`;

function MyPage() {
  return (
    <LoginForm>
      <h2
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "1em",
        }}
      >
        login
      </h2>
      <LoginInput type="text" placeholder="Username" />
      <LoginInput type="password" placeholder="Password" />
      <LoginInput
        buttonCursor
        buttonColor
        buttonShadow
        buttonBgColor
        type="button"
        value="LogIn"
      />
      <LoginInput
        buttonCursor
        buttonColor
        buttonShadow
        buttonBgColor
        type="button"
        value="Create Account"
      />
    </LoginForm>
  );
}

export default MyPage;
