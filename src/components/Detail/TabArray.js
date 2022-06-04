import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TotalOverview from "./Overview";
import Preference from "./Preference";

const ShowInfoLi = styled.li`
  background-color: #3d3d3d;
  height: 90%;
  padding: 0.5em 0 0.5em 0.5em;
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

function FirstMenuContent({ data, movie }) {
  return (
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
  );
}

export default FirstMenuContent;
