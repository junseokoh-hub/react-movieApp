import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const PrefContainer = styled.div`
  display: flex;
  align-items: center;
  .heart {
    display: block;
    font-size: 2em;
    margin-left: 0.3em;
  }
`;

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

function Preference({ data }) {
  const [colorState, setColorState] = useState(false);
  return (
    <PrefContainer>
      <VoteRateCircle value={data.vote_average?.toFixed(1)}></VoteRateCircle>
      <FaHeart
        className="heart"
        color={colorState ? `rgba(255,0,0,0.8)` : "#fff"}
        onClick={() => setColorState((prev) => !prev)}
      />
    </PrefContainer>
  );
}

export default Preference;
