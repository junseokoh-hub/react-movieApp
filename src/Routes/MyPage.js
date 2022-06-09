import React from "react";
import styled from "styled-components";

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

const LoginInput = styled.input.attrs({ required: true })`
  padding: 1em;
  margin: ${(props) => props.theme.smallGap} 0;
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.smallGap};
`;

const LoginButton = styled(LoginInput)`
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
`;

function MyPage({ login, onChange, onLogin, onLogout, email, savedUsername }) {
  // const [email, setEmail] = useState("");

  // const onChange = (e) => {
  //   const {
  //     target: { value },
  //   } = e;
  //   console.log(value);
  //   setEmail(value);
  // };

  // const onLogin = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("username", email);
  //   setLogin(true);
  // };

  // const savedUsername = localStorage.getItem("username");

  // const onLogout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("username");
  //   setLogin(false);
  //   setEmail("");
  // };

  return (
    <>
      {login || savedUsername !== null ? (
        <ul>
          <li>My Profile</li>
          <li>My Ratings</li>
          <li>Preference</li>
          <li>Settings</li>
          <li onClick={onLogout} style={{ cursor: "pointer" }}>
            Log Out
          </li>
        </ul>
      ) : (
        <LoginForm onSubmit={onLogin}>
          <LoginTitle>login</LoginTitle>
          <LoginInput
            value={email}
            onChange={onChange}
            type="email"
            name="email"
            placeholder="Username"
          />
          <LoginInput type="password" name="password" placeholder="Password" />
          <LoginButton onClick={onLogin} type="submit" value="LogIn" />
          <LoginButton type="button" value="Create Account" />
        </LoginForm>
      )}
    </>
  );
}

export default MyPage;
