import styled from "styled-components";
import React, { useState } from "react";
import FirstMenuContent from "../TabInfo/TabInfo";
import SecondMenuContent from "../TabCredits";

const ShowInfoUl = styled.ul`
  width: 85%;
  background-color: rgb(0, 0, 0, 0.5);
  padding: ${(props) => props.theme.smallGap} 0 0
    ${(props) => props.theme.smallGap};
  cursor: pointer;
  .isToggled {
    background-color: #3d3d3d;
    color: #fff;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ShowInfoLi = styled.li`
  background-color: #3d3d3d;
  height: 95%;
  padding: 0.5em;
  margin: 0 0.5em 0 0;
`;

const TabSpan = styled.span`
  cursor: pointer;
  padding: 0.2em 4em;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  @media screen and (max-width: 500px) {
    padding: 0.2em 2em;
  }
`;

function TabBundle({ data, movie, credits }) {
  const TabMenu = [
    {
      name: "Info",
      content: <FirstMenuContent data={data} movie={movie} />,
    },
    { name: "Cast", content: <SecondMenuContent credits={credits} /> },
  ];
  const [Toggled, setToggled] = useState(0);
  const handleToggled = (index) => {
    setToggled(index);
  };
  return (
    <ShowInfoUl>
      <li>
        {TabMenu.map((tab, index) => {
          return (
            <TabSpan
              key={index}
              className={Toggled === index && "isToggled"}
              onClick={() => handleToggled(index)}
            >
              {tab.name}
            </TabSpan>
          );
        })}
      </li>
      <ShowInfoLi>{TabMenu[Toggled].content}</ShowInfoLi>
    </ShowInfoUl>
  );
}

export default TabBundle;
