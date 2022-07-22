import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { accountSelector } from "../../../Recoil/ListAtom";
import { API_KEY, API_URL } from "../../../Config";
import { getCookie } from "../../../Cookie";

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

function Preference({ data, movie }) {
  const [colorState, setColorState] = useState(false);
  const accountId = useRecoilValue(accountSelector);
  const onClick = () => {
    setColorState((prev) => !prev);
  };

  const markFav = async () => {
    const response = await fetch(
      `https://${API_URL}account/${accountId}/favorite?api_key=${API_KEY}&session_id=${getCookie(
        "tmdbsession",
      )}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          media_type: movie ? "movie" : "tv",
          media_id: data?.id,
          favorite: colorState,
        }),
      },
    );
    const json = await response.json().catch((err) => console.log(err));
  };

  useEffect(() => {
    markFav();
  }, [colorState]);
  return (
    <PrefContainer>
      <VoteRateCircle value={data.vote_average?.toFixed(1)}></VoteRateCircle>
      <FaHeart
        className="heart"
        color={colorState ? `rgba(255,0,0,0.8)` : "#fff"}
        onClick={onClick}
      />
    </PrefContainer>
  );
}

export default Preference;
