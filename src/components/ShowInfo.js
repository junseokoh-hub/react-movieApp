import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const ShowInfoUl = styled.ul`
  width: 85%;
  background-color: rgb(0, 0, 0, 0.5);
  padding: ${(props) => props.theme.smallGap} 0 0
    ${(props) => props.theme.smallGap};
  a {
    text-decoration-line: none;
  }
`;

const TabSpan = styled.span`
  background-color: ${(props) => props.isToggled && `#3d3d3d`};
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  margin-left: ${(props) => props.marginLeft && `0.5em`};
`;

const ShowInfoLi = styled.li`
  background-color: #3d3d3d;
  height: 90%;
  padding: 0.5em 0 0 0.5em;
`;

const ShowGenre = styled.span`
  margin: 0 1em;
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

const OverviewTitle = styled.h3`
  margin-top: 0.5em;
`;

const OverviewContent = styled.p`
  margin-top: ${(props) => props.theme.smallGap};
`;

const OverviewCreator = styled.div`
  margin-top: ${(props) => props.theme.smallGap};
`;

const PathToSimilar = styled.span`
  display: inline-block;
  font-size: 0.9em;
  font-weight: 600;
  color: ${(props) => props.theme.bgColor};
  margin-top: ${(props) => props.theme.smallGap};
  padding: ${(props) => props.theme.smallGap};
  border: 1px solid palevioletred;
  cursor: pointer;
`;

function ShowInformation({ data, movie }) {
  return (
    <ShowInfoUl>
      <li>
        <TabSpan isToggled>Info</TabSpan>
        <TabSpan marginLeft>Cast</TabSpan>
      </li>
      <ShowInfoLi>
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
            return <ShowGenre key={index}>{item.name}</ShowGenre>;
          })}
        <VoteRateCircle value={data.vote_average}></VoteRateCircle>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewContent>
          {data.overview && data.overview.slice(0, 250)}...
        </OverviewContent>
        <OverviewCreator>
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
        </OverviewCreator>
        {data && (
          <Link to={`/${movie ? "movie" : "tv"}/${data.id}/similarShows`}>
            <PathToSimilar>Similar Shows</PathToSimilar>
          </Link>
        )}
      </ShowInfoLi>
    </ShowInfoUl>
  );
}

export default ShowInformation;
