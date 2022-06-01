import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  padding: 0 1em;
`;

function Head() {
  return (
    <Header>
      <Ul>
        <li>
          <Link to="/">
            <span>Movies</span>
          </Link>
          <Link to="/tv">
            <span>TV</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <span>Search</span>
          </Link>
          <Link to="/myPage">
            <span>My Page</span>
          </Link>
        </li>
      </Ul>
    </Header>
  );
}

export default Head;
