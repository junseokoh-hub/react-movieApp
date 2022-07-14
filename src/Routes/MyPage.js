import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { LoginContext } from "../Context/LoginContext";
import { onLogin, getItemfromLocalStorage } from "../LocalStorage";
import MyInfo from "../components/MyPage/MyInfo/MyInfo";
import { useForm } from "react-hook-form";

const LoginTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1em;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50em;
  margin: 9em auto;
  padding: 3em 1em;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

const LoginInput = styled.input`
  padding: 1em;
  margin: ${(props) => props.theme.smallGap} 0;
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.smallGap};
  width: 80%;
`;

const LoginButton = styled(LoginInput)`
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
`;

function MyPage() {
  const { register, handleSubmit, setValue } = useForm();
  let navigate = useNavigate();
  const { login, setLogin } = useContext(LoginContext);

  const handleValid = (data) => {
    const { username, password } = data;
    if (data) {
      onLogin(username, password);
      setLogin(getItemfromLocalStorage() !== null);
      navigate("/");
      setValue("username", "");
      setValue("password", "");
    } else {
      alert("입력해주세요!");
    }
    console.log("get logged in !");
  };
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <>
      <Helmet>
        <title>{login ? `My Page` : `Log In`}</title>
      </Helmet>
      {login ? (
        <>
          <MyInfo />
        </>
      ) : (
        <LoginForm onSubmit={handleSubmit(handleValid)}>
          <LoginTitle>login</LoginTitle>
          <LoginInput
            {...register("username", { required: "Username is required!" })}
            type="text"
            placeholder="Username"
          />
          <LoginInput
            {...register("password", { required: "Password is" })}
            type="password"
            placeholder="Password"
          />
          <LoginButton type="submit" value="LogIn" />
          <LoginButton
            type="button"
            value="Create Account"
            onClick={() => navigate("/createAccount")}
          />
        </LoginForm>
      )}
    </>
  );
}

export default MyPage;
