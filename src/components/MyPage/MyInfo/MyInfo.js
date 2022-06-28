import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import { getItemfromLocalStorage } from "../../../LocalStorage";
import SideMenu from "../SideMenu/SideMenu";

const Test = styled.div`
  width: 10em;
  height: 10em;
  background-image: url("/img/snowLeopard.png");
  background-size: cover;
  border: 1px solid #fff;
`;

function MyInfo() {
  const id = getItemfromLocalStorage();
  let navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex" }}>
        <Test />
        <span>{id.slice(0, id.indexOf("@"))}</span>
      </div>
      <ul
        style={{ display: "flex", marginTop: "1em", justifyContent: "Center" }}
      >
        <li
          style={{ marginRight: "1em" }}
          onClick={() => navigate(`/myPage/myProfile`)}
        >
          My Profile
        </li>
        <li
          style={{ marginRight: "1em" }}
          onClick={() => navigate(`/myPage/myRating`)}
        >
          My Ratings
        </li>
        <li
          style={{ marginRight: "1em" }}
          onClick={() => navigate(`/myPage/myList`)}
        >
          My List
        </li>
      </ul>
      <SideMenu />
      <Outlet />
    </>
  );
}

export default MyInfo;
