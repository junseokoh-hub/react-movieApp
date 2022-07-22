import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
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
  .clicked {
    color: teal;
  }
`;

function MyInfo() {
  return (
    <>
      <TestInfo>
        <Test />
      </TestInfo>
      <Tabs>
        <Tab>
          <NavLink
            to={`/myPage/myProfile`}
            className={({ isActive }) => (isActive ? "clicked" : "")}
          >
            My Profile
          </NavLink>
        </Tab>
        <Tab>
          <NavLink
            to={`/myPage/myRating`}
            className={({ isActive }) => (isActive ? "clicked" : "")}
          >
            My Ratings
          </NavLink>
        </Tab>
        <Tab>
          <NavLink
            to={`/myPage/myList`}
            className={({ isActive }) => (isActive ? "clicked" : "")}
          >
            My List
          </NavLink>
        </Tab>
      </Tabs>
      <SideMenu />
      <Outlet />
    </>
  );
}

export default MyInfo;
