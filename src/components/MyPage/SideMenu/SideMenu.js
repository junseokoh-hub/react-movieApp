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
  background-color: #000;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: fixed;
    left: -80px;
    transform: ${(props) => props.transform};
    transition: all 0.3s ease-out;
  }
`;

const SideLi = styled.li`
  cursor: pointer;
  opacity: 0.8;
  &:nth-child(1) {
    position: absolute;
    right: -20px;
    top: 40%;
  }
  &:hover {
    opacity: 1;
  }
`;

function SideMenu() {
  const [openSide, setOpenSide] = useState(false);
  const { getLogout } = useContext(LoginContext);
  let navigate = useNavigate();

  const onOpenSide = () => {
    setOpenSide((prev) => !prev);
  };

  const toNavigate = (e) => {
    const {
      target: { innerHTML },
    } = e;
    if (innerHTML === "My Ratings") {
      navigate(`/myPage/myProfile/myRating`);
    } else if (innerHTML === "My List") {
      navigate(`/myPage/myProfile/myList`);
    }
  };

  return (
    <>
      <SideUl transform={openSide ? `translateX(80px)` : `translate(-5px)`}>
        <SideLi onClick={onOpenSide}>
          {openSide ? (
            <FaChevronLeft />
          ) : (
            <FaChevronRight className="fa-right" />
          )}
        </SideLi>
        <SideLi onClick={toNavigate}>My Ratings</SideLi>
        <SideLi onClick={toNavigate}>My List</SideLi>
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
