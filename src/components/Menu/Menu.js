import React, { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../../Context/LoginContext";

const MenuContainer = styled.div`
  width: 5em;
  height: 15em;
  background-color: ${(props) => props.theme.whiteColor};
  position: absolute;
  top: 25px;
  right: 0;
  color: #000;
  border-radius: 0.2em;
`;

function Menu() {
  const { getLogout } = useContext(LoginContext);
  return (
    <MenuContainer>
      <ul>
        <li>My Ratings</li>
        <li>My WatchList</li>
        <li>Prefernce</li>
        <li onClick={getLogout}>Log Out</li>
      </ul>
    </MenuContainer>
  );
}

export default Menu;
