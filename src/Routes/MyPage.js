import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { LoginContext } from "../Context/LoginContext";
import { onLogin, getItemfromLocalStorage } from "../LocalStorage";
import MyProfile from "../components/MyPage/MyProfile";

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
    width: 17em;
    margin: 6em auto;
  }
`;

const LoginInput = styled.input`
  padding: 1em;
  margin: ${(props) => props.theme.smallGap} 0;
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.smallGap};
  width: 100%;
`;

const LoginButton = styled(LoginInput)`
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
`;

function MyPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, setLogin } = useContext(LoginContext);

  let navigate = useNavigate();

  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const getLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, password);
      setLogin(getItemfromLocalStorage() !== null);
      navigate("/");
      setEmail("");
      setPassword("");
    } else {
      alert(`입력해주세요`);
    }
    console.log(`get login`);
  };

  return (
    <>
      <Helmet>
        <title>{login ? `My Page` : `Log In`}</title>
      </Helmet>
      {login ? (
        <>
          <MyProfile />
        </>
      ) : (
        <LoginForm onSubmit={getLogin}>
          <LoginTitle>login</LoginTitle>
          <LoginInput
            value={email}
            onChange={onChange}
            type="email"
            name="email"
            placeholder="Username"
          />
          <LoginInput
            value={password}
            onChange={onChange}
            type="password"
            name="password"
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
