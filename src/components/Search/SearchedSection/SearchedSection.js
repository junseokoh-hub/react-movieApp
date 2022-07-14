import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../../Config";
import { handleImgError } from "../../../ErrorImg";

const SearchedUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5em 0;
`;

const SearchedLi = styled.li`
  margin: 0 1em 0.5em 1em;
  padding: 0.5em 0 0 0.5em;
  width: 11em;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.smallGap};
  @media screen and (max-width: 500px) {
    width: 5em;
    margin: 0 0 0.5em 1em;
  }
`;

const SearchedImg = styled.img`
  width: ${(props) => props.width};
  height: 15em;
  display: block;
  border-radius: ${(props) => props.theme.smallGap};
  margin-bottom: ${(props) => props.theme.smallGap};
  transition: all 0.1s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(1.05);
    opacity: 0.5;
  }
  @media screen and (max-width: 500px) {
    height: 6em;
    width: 4em;
  }
`;

const SearchedTitle = styled.p`
  font-size: 1.1em;
  font-weight: 700;
  color: ${(props) => props.theme.whiteColor};
  @media screen and (max-width: 500px) {
    font-size: 0.4em;
  }
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
  const filteredData = filtered?.filter(
    (item) => item.media_type === mediaType,
  );
  console.log("i'm rendered");
  return (
    <>
      <SearchedType>{movie ? "Movie" : "TV Show"}</SearchedType>

      {filteredData?.length === 0 ? (
        <SearchedException>No results...</SearchedException>
      ) : (
        <SearchedUl>
          {filteredData?.map((item) => {
            const date = movie ? item.release_date : item.first_air_date;
            const name = movie ? item.original_title : item.original_name;
            return (
              <SearchedLi key={item.id}>
                <Link to={`/${mediaType}/${item.id}`}>
                  <SearchedImg
                    src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                    alt={item.title}
                    onError={handleImgError}
                    width={item.poster_path === null ? "10em" : ""}
                  />
                  <SearchedTitle>{name}</SearchedTitle>
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

export default React.memo(SearchedSection);
