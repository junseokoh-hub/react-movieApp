import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "../../Context/LoginContext";

const MenuContainer = styled.div`
  width: 5em;
  height: 5em;
  background-color: ${(props) => props.theme.whiteColor};
  position: absolute;
  top: 25px;
  right: 0;
  color: #000;
  border-radius: 0.2em;
  &::after {
    content: "";
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    position: absolute;
    top: -6px;
    right: 0px;
    z-index: -1;
  }
  li {
    cursor: pointer;
  }
`;

function Menu({ setMenuOpen }) {
  const { getLogout } = useContext(LoginContext);
  let navigate = useNavigate();
  const toNavigate = (e) => {
    const {
      target: { innerHTML },
    } = e;
    if (innerHTML === "My Profile") {
      navigate(`/myPage/myProfile`);
    } else if (innerHTML === "My Ratings") {
      navigate("/myPage/myRating");
    } else if (innerHTML === "My List") {
      navigate("/myPage/myList");
    } else if (innerHTML === "Log Out") {
      getLogout(e);
      navigate("/myPage");
    }
    setMenuOpen(false);
  };
  return (
    <MenuContainer>
      <ul>
        <li onClick={toNavigate}>My Profile</li>
        <li onClick={toNavigate}>My Ratings</li>
        <li onClick={toNavigate}>My List</li>
        <li onClick={toNavigate}>Log Out</li>
      </ul>
    </MenuContainer>
  );
}

export default Menu;
