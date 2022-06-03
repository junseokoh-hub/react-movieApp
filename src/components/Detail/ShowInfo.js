import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import TotalOverview from "./Overview";
import Preference from "./Preference";

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
            <span style={{ marginLeft: "0.3em" }}>
              ({data.release_date && data.release_date.slice(0, 4)})
            </span>
          </h2>
        ) : (
          <h2>{data.original_name}</h2>
        )}
        {data.genres &&
          data.genres.map((item, index) => {
            return <ShowGenre key={index}>{item.name}</ShowGenre>;
          })}
        <Preference data={data} />
        <TotalOverview data={data} movie={movie} />
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