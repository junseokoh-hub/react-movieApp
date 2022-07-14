import React from "react";
import styled from "styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AccountContainer = styled.div`
  padding-top: 3.2em;
  svg {
    cursor: pointer;
    margin-left: 0.2em;
    margin-top: 0.2em;
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
  span {
    text-align: center;
    color: #c0392b;
    margin-bottom: 1em;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

const AccountInput = styled.input`
  margin: 0 auto;
  margin-bottom: 1em;
  width: 30em;
  padding: 0.5em;
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
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm();
  const handleValid = (data) => {
    const { password, confirmation } = data;
    if (password !== confirmation) {
      return setError("confirmation", {
        message: "Password are not the same!",
      });
    }
    if (data) {
      setValue("username", "");
      setValue("password", "");
      setValue("confirmation", "");
      navigate("/myPage");
    }
  };
  let navigate = useNavigate();
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <AccountContainer>
      <FaArrowCircleLeft onClick={() => navigate(-1)} />
      <AccountForm onSubmit={handleSubmit(handleValid)}>
        <AccountInput
          {...register("username", { required: true })}
          type="text"
          placeholder="Username..."
        />
        <AccountInput
          {...register("password", { required: true })}
          type="password"
          placeholder="Password..."
        />
        <AccountInput
          {...register("confirmation", { required: true })}
          type="password"
          placeholder="Password Confirmation..."
        />
        <span>{errors?.confirmation?.message}</span>
        <AccountBtn>Create</AccountBtn>
      </AccountForm>
    </AccountContainer>
  );
}

export default CreateAccount;
