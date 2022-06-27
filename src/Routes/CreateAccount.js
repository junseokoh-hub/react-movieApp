import React from "react";
import styled from "styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountContainer = styled.div`
  svg {
    cursor: pointer;
    margin-left: 0.2em;
  }
`;

const AccountForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50em;
  padding: 2em 0;
  margin: 9em auto;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

const AccountInput = styled.input`
  margin: 0 auto;
  margin-bottom: 2em;
  width: 30em;
  padding: 0.5em 0em;
  border-radius: ${(props) => props.theme.smallGap};
  @media screen and (max-width: 500px) {
    width: 17em;
  }
`;

const AccountBtn = styled.button`
  padding: 0.5em 0;
  margin: 0 auto;
  width: 30em;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.whiteColor};
  border-radius: ${(props) => props.theme.smallGap};
  border: none;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 17em;
  }
`;

function CreateAccount() {
  let navigate = useNavigate();
  return (
    <AccountContainer>
      <FaArrowCircleLeft onClick={() => navigate(-1)} />
      <AccountForm>
        <AccountInput type="email" placeholder="Email..." />
        <AccountInput type="password" placeholder="Password..." />
        <AccountInput type="password" placeholder="Password Again..." />
        <AccountBtn
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Create
        </AccountBtn>
      </AccountForm>
    </AccountContainer>
  );
}

export default CreateAccount;
