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
  width: 10em;
  display: ${(props) => props.display};
  flex-direction: column;
  margin: 0 1em;
  cursor: pointer;
`;

const SearchedImg = styled.img`
  height: 15em;
  display: block;
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

function SearchedSection({ movie, searchData }) {
  return (
    <>
      <SearchedType
        display={searchData.results === undefined ? "none" : "flex"}
      >
        {movie ? "Movie" : "TV Show"}
      </SearchedType>
      {searchData.results && searchData.results[0] === undefined ? (
        <SearchedException>No results...</SearchedException>
      ) : (
        <SearchedUl>
          {searchData.results &&
            searchData.results
              .filter((item) => item.media_type === `${movie ? "movie" : "tv"}`)
              .map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={`/${movie ? "movie" : "tv"}/${item.id}`}
                  >
                    <SearchedLi
                      display={
                        item.backdrop_path === null && item.poster_path === null
                          ? "none"
                          : "flex"
                      }
                    >
                      <SearchedImg
                        src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                        alt={item.title}
                      />
                      <SearchedTitle>{item.original_title}</SearchedTitle>
                      <SearchedDate>
                        {item.release_date && item.release_date.slice(0, 4)}
                      </SearchedDate>
                    </SearchedLi>
                  </Link>
                );
              })}
        </SearchedUl>
      )}
    </>
  );
}

export default SearchedSection;