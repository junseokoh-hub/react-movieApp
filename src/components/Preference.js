import React, { useState } from "react";
import styled from "styled-components";

const VoteRateCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColor};
  color: black;
  opacity: 0.8;
  &::before {
    position: absolute;
    content: "${(props) => props.value}";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: ${(props) => props.theme.whiteColor};
  }
`;

const HeartLike = styled.div`
  width: 2em;
  height: 2em;
  border: 1px solid black;
  border-radius: 50%;
  margin-left: ${(props) => props.theme.smallGap};
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

function Preference({ data }) {
  const [color, setColor] = useState();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <VoteRateCircle value={data.vote_average}></VoteRateCircle>
      <HeartLike color={color} onClick={() => setColor("red")} />
    </div>
  );
}

export default Preference;
