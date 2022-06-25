import React from "react";
import styled from "styled-components";
import { getItemfromLocalStorage } from "../../../LocalStorage";

const Test = styled.div`
  width: 10em;
  height: 10em;
  background-image: url("/img/snowLeopard.png");
  background-size: cover;
  border: 1px solid #fff;
`;

function MyInfo() {
  const id = getItemfromLocalStorage();
  return (
    <li style={{ display: "flex" }}>
      <Test />
      <span>{id.slice(0, id.indexOf("@"))}</span>
    </li>
  );
}

export default MyInfo;
