import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";

const Header = styled.header`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  a {
    text-decoration-line: none;
  }
  span {
    color: ${(props) => props.theme.whiteColor};
    padding: 0 0.5em;
    cursor: pointer;
  }
  .disappear {
    display: none;
  }
  .appear {
    display: inline-block;
  }
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  padding: 0 1em;
  input {
    border: 1px solid #fff;
    padding: 0.2em 0.3em;
    outline: none;
    background-color: ${(props) => props.theme.bgColor};
    &::placeholder {
      color: ${(props) => props.theme.whiteColor};
    }
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
`;

function Head() {
  const [open, setOpen] = useState(false);

  const { login, getLogout } = useContext(LoginContext);

  const openSearch = () => {
    setOpen((open) => !open);
  };

  return (
    <Header>
      <Ul>
        <Li>
          <Link to="/">
            <span>Movies</span>
          </Link>
          <Link to="/tv">
            <span>TV</span>
          </Link>
        </Li>
        <Li>
          <span onClick={openSearch}>🔍</span>
          <input
            className={!open ? "disappear" : "appear"}
            type="text"
            placeholder="Search..."
          />
          <Link to="/search">
            <span>Search</span>
          </Link>
          {login ? (
            <>
              <Link to="/myPage">
                <span>My Page</span>
              </Link>
              <span onClick={getLogout}>LogOut</span>
            </>
          ) : (
            <Link to="/myPage">
              <span>LogIn</span>
            </Link>
          )}
        </Li>
      </Ul>
    </Header>
  );
}

export default Head;
