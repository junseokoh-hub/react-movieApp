import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../../Config";

const SearchedUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5em 0;
`;

const SearchedLi = styled.li`
  width: 11em;
  display: ${(props) => props.display};
  flex-direction: column;
  margin: 0 1em;
  margin-bottom: ${(props) => props.theme.smallGap};
  cursor: pointer;
`;

const SearchedImg = styled.img`
  height: 15em;
  display: block;
  border-radius: ${(props) => props.theme.smallGap};
  margin-bottom: ${(props) => props.theme.smallGap};
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
    opacity: 0.5;
  }
`;

const SearchedTitle = styled.p`
  font-size: 1.1em;
  font-weight: 700;
  color: ${(props) => props.theme.whiteColor};
`;

const SearchedDate = styled.span`
  font-size: 0.5em;
  font-style: italic;
  color: ${(props) => props.theme.whiteColor};
`;

const SearchedType = styled.h3`
  display: ${(props) => props.display};
  font-size: 2em;
  color: ${(props) => props.theme.darkBlueColor};
  margin-top: ${(props) => props.theme.smallGap};
  padding-left: 0.5em;
`;

const SearchedException = styled.span`
  padding-left: 1em;
  font-size: 1.5em;
  font-style: italic;
  padding-top: 0.5em;
  display: inline-block;
`;

function SearchedSection({ filtered = [], movie }) {
  const mediaType = movie ? "movie" : "tv";
  const filteredData = filtered.filter((item) => item.media_type === mediaType);

  return (
    <>
      <SearchedType>{movie ? "Movie" : "TV Show"}</SearchedType>

      {filteredData.length === 0 ? (
        <SearchedException>No results...</SearchedException>
      ) : (
        <SearchedUl>
          {filteredData.map((item) => {
            const date = movie ? item.release_date : item.first_air_date;
            return (
              <SearchedLi
                key={item.id}
                display={
                  item.backdrop_path === null && item.poster_path === null
                    ? "none"
                    : "flex"
                }
              >
                <Link to={`/${mediaType}/${item.id}`}>
                  <SearchedImg
                    src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                    alt={item.title}
                  />
                  <SearchedTitle>
                    {movie ? item.original_title : item.original_name}
                  </SearchedTitle>
                  <SearchedDate>
                    {date ? date.slice(0, 4) : "미정"}
                  </SearchedDate>
                </Link>
              </SearchedLi>
            );
          })}
        </SearchedUl>
      )}
    </>
  );
}

export default SearchedSection;
