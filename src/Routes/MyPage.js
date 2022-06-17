import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { LoginContext } from "../Context/LoginContext";
import { onLogin, onLogout, getItemfromLocalStorage } from "../LocalStorage";

const LoginTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1em;
`;

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

function MyPage(/*{ login, setLogin }*/) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, setLogin] = useState(getItemfromLocalStorage() !== null);

  const { login, setLogin } = useContext(LoginContext);

  const onChange = (e) => {
    console.log(e);
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
      setEmail("");
      setPassword("");
    } else {
      alert(`입력해주세요`);
    }
    console.log(`get login`);
  };

  const getLogout = (e) => {
    e.preventDefault();
    onLogout();
    setLogin(getItemfromLocalStorage() !== null);
  };

  return (
    <>
      <Helmet>
        <title>My Page</title>
      </Helmet>
      {login ? (
        <ul>
          <li>My Ratings</li>
          <li>My WatchList</li>
          <li>Preference</li>
          <li>Settings</li>
          <li onClick={getLogout} style={{ cursor: "pointer" }}>
            Log Out
          </li>
        </ul>
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
          <LoginButton type="button" value="Create Account" />
        </LoginForm>
      )}
    </>
  );
}

export default MyPage;
