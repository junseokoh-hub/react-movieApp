import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/LoginContext";

const SideUl = styled.ul`
  width: 5em;
  height: 10em;
  border: 1px solid #fff;
  display: none;
  .side-li--first {
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    right: ${(props) => props.right};
    .side-li--first {
      display: block;
      position: absolute;
      left: -20px;
      top: 40%;
    }
  }
`;

const SideLi = styled.li`
  .fa-left {
    display: none;
  }
  @media screen and (max-width: 500px) {
    .fa-left,
    .fa-right {
      display: block;
      position: absolute;
    }
  }
`;

function SideMenu() {
  const [openSide, setOpenSide] = useState(false);
  const { getLogout } = useContext(LoginContext);
  let navigate = useNavigate();

  const onOpenSide = () => {
    setOpenSide((prev) => !prev);
  };

  return (
    <>
      <SideUl right={openSide ? `0` : `-80px`}>
        <SideLi className="side-li--first" onClick={onOpenSide}>
          {openSide ? (
            <FaChevronRight className="fa-right" />
          ) : (
            <FaChevronLeft className="fa-left" />
          )}
        </SideLi>
        <SideLi>My Ratings</SideLi>
        <SideLi>My List</SideLi>
        <SideLi
          onClick={(e) => {
            getLogout(e);
            navigate("/");
          }}
        >
          Log Out
        </SideLi>
      </SideUl>
    </>
  );
}

export default SideMenu;
