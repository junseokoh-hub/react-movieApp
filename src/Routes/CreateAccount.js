import React from "react";
import styled from "styled-components";

const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50em;
  margin: 9em auto;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (max-width: 300px) {
    width: 20em;
  }
`;

const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
`;

const AccountInput = styled.input`
  margin-bottom: 2em;
  width: 20em;
  padding: 0.5em 0em;
`;

const AccountBtn = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  padding: 0.5em 0;
`;

function CreateAccount() {
  return (
    <AccountContainer>
      <AccountForm>
        <AccountInput type="email" placeholder="Email..." />
        <AccountInput type="password" placeholder="Password..." />
        <AccountInput type="password" placeholder="Password Again..." />
        <AccountBtn>Create</AccountBtn>
      </AccountForm>
    </AccountContainer>
  );
}

export default CreateAccount;
