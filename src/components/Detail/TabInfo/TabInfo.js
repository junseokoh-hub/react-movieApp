import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TotalOverview from "../Overview/Overview";
import Preference from "../Preference/Preference";
import { useSetRecoilState } from "recoil";
import { NavAtom } from "../../../Recoil/NavAtom";

const ShowGenre = styled.span`
  margin-right: 0.2em;
  display: inline-block;
  align-items: center;
  font-size: 0.8em;
`;

const ReleaseDate = styled.span`
  margin-left: 0.3em;
  font-size: 0.6em;
`;

const PathToSimilar = styled.span`
  display: inline-block;
  font-size: 0.9em;
  font-weight: 600;
  color: ${(props) => props.theme.whiteColor};
  margin-top: ${(props) => props.theme.smallGap};
  padding: ${(props) => props.theme.smallGap};
  border: 1px solid rgb(20, 20, 20);
  cursor: pointer;
`;

function FirstMenuContent({ data, movie }) {
  const setNavOpen = useSetRecoilState(NavAtom);
  return (
    <>
      {movie ? (
        <h2>
          {data.original_title}
          <ReleaseDate>
            ({data.release_date && data.release_date.slice(0, 4)})
          </ReleaseDate>
        </h2>
      ) : (
        <h2>
          {data.original_name}
          <ReleaseDate>
            ({data.first_air_date && data.first_air_date.slice(0, 4)})
          </ReleaseDate>
        </h2>
      )}
      {data.genres &&
        data.genres.map((item, index) => {
          return (
            <ShowGenre key={index}>
              {item.name}
              {data.genres.length - 1 !== index && <span> / </span>}
            </ShowGenre>
          );
        })}
      <Preference data={data} movie={movie} />
      <TotalOverview data={data} movie={movie} />
      {data && (
        <Link to={`/${movie ? "movie" : "tv"}/${data.id}/similarShows`}>
          <PathToSimilar onClick={() => setNavOpen(false)}>
            Similar Shows
          </PathToSimilar>
        </Link>
      )}
    </>
  );
}

export default FirstMenuContent;
