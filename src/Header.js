import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getItemfromLocalStorage, onLogout } from "./LocalStorage";

const Header = styled.header`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadow};
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

function Head({ login, setLogin }) {
  const [open, setOpen] = useState(false);

  const openSearch = () => {
    setOpen((open) => !open);
  };

  const getLogout = (e) => {
    e.preventDefault();
    onLogout();
    setLogin(getItemfromLocalStorage() !== null);
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
          <Link to="/myPage">
            <span>My Page</span>
          </Link>
          {login ? (
            <span onClick={getLogout}>LogOut</span>
          ) : (
            <span style={{ display: "none" }}></span>
          )}
        </Li>
      </Ul>
    </Header>
  );
}

export default Head;
