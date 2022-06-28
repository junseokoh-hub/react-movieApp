import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { getItemfromLocalStorage } from "../../../LocalStorage";
import SideMenu from "../SideMenu/SideMenu";

const TestInfo = styled.div`
  display: flex;
  padding-top: 3.2em;
  .username {
    margin-left: 1em;
    font-size: 2em;
    display: flex;
    align-items: center;
  }
`;

const Test = styled.div`
  width: 10em;
  height: 10em;
  background-image: url("/img/snowLeopard.png");
  background-size: cover;
  border: 1px solid #fff;
`;

const Tabs = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const Tab = styled.li`
  margin: 0 auto;
`;

function MyInfo() {
  const id = getItemfromLocalStorage();
  return (
    <>
      <TestInfo>
        <Test />
        <span className="username">{id.slice(0, id.indexOf("@"))}</span>
      </TestInfo>
      <Tabs>
        <Tab>
          <Link to={`/myPage/myProfile`}>My Profile</Link>
        </Tab>
        <Tab>
          <Link to={`/myPage/myRating`}>My Ratings</Link>
        </Tab>
        <Tab>
          <Link to={`/myPage/myList`}>My List</Link>
        </Tab>
      </Tabs>
      <SideMenu />
      <Outlet />
    </>
  );
}

export default MyInfo;
