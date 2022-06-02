import styled from "styled-components";
import React from "react";

const ShowInfoUl = styled.ul`
  width: 85%;
  background-color: rgb(0, 0, 0, 0.5);
  padding: ${(props) => props.theme.smallGap} 0 0
    ${(props) => props.theme.smallGap};
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
  margin-top: ${(props) => props.theme.smallGap};
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

const Overview = styled.p`
  margin-top: ${(props) => props.theme.smallGap};
`;

function TabIntro({ data, movie }) {
  return (
    <ShowInfoUl>
      <li>
        <span>Info</span>
        <span style={{ marginLeft: "0.5em" }}>Cast</span>
      </li>
      <li>
        {movie ? (
          <h2>
            {data.original_title}
            <span>({data.release_date && data.release_date.slice(0, 4)})</span>
          </h2>
        ) : (
          <h2>{data.original_name}</h2>
        )}
        {data.genres &&
          data.genres.map((item, index) => {
            return (
              <span key={index} style={{ margin: "0 1em" }}>
                {item.name}
              </span>
            );
          })}
        <VoteRateCircle value={data.vote_average}></VoteRateCircle>
        <h3 style={{ marginTop: "0.5em" }}>Overview</h3>
        <Overview>{data.overview && data.overview.slice(0, 140)}...</Overview>
        <div style={{ marginTop: "0.5em" }}>
          {movie ? <h5>Production</h5> : <h5>Creator</h5>}
          {movie
            ? data.production_companies &&
              data.production_companies.map((item) => {
                return <span key={item.id}> {item.name}</span>;
              })
            : data.created_by &&
              data.created_by.map((item) => {
                return <span key={item.id}>{item.name}</span>;
              })}
        </div>
      </li>
    </ShowInfoUl>
  );
}

export default TabIntro;
