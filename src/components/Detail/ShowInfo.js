import styled from "styled-components";
import React, { useState } from "react";
import FirstMenuContent from "./TabArray";

const ShowInfoUl = styled.ul`
  width: 85%;
  background-color: rgb(0, 0, 0, 0.5);
  padding: ${(props) => props.theme.smallGap} 0 0
    ${(props) => props.theme.smallGap};
  .tab__button {
    width: 33.3%;
    display: flex;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
  }
  .isToggled {
    background-color: #000;
    color: #fff;
  }
  a {
    text-decoration-line: none;
  }
`;

function ShowInformation({ data, movie }) {
  const TabMenu = [
    {
      name: "Info",
      content: <FirstMenuContent data={data} movie={movie} />,
    },
    { name: "Cast", content: <div>Good Morning</div> },
  ];
  const [Toggled, setToggled] = useState(0);
  const handleToggled = (index) => {
    setToggled(index);
  };
  return (
    <ShowInfoUl>
      <li style={{ display: "flex" }}>
        {TabMenu.map((tab, index) => {
          return (
            <div
              style={{ marginRight: "1em", cursor: "pointer" }}
              key={index}
              className={
                Toggled === index ? "tab_button isToggled" : "tab_button"
              }
              onClick={() => handleToggled(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </li>
      <li>{TabMenu[Toggled].content}</li>
    </ShowInfoUl>
  );
}

export default ShowInformation;
