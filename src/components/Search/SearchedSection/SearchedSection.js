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
  const { results } = searchData;

  return (
    <>
      <SearchedType display={results === undefined ? "none" : "flex"}>
        {movie ? "Movie" : "TV Show"}
      </SearchedType>
      {results && results[0] === undefined ? (
        <SearchedException>No results...</SearchedException>
      ) : (
        <SearchedUl>
          {results &&
            results
              .filter((item) => item.media_type === `${movie ? "movie" : "tv"}`)
              .map((item) => {
                const {
                  id,
                  backdrop_path,
                  poster_path,
                  title,
                  original_name,
                  original_title,
                  release_date,
                  first_air_date,
                } = item;

                return (
                  <Link key={id} to={`/${movie ? "movie" : "tv"}/${id}`}>
                    <SearchedLi
                      display={
                        backdrop_path === null && poster_path === null
                          ? "none"
                          : "flex"
                      }
                    >
                      <SearchedImg
                        src={`https://${IMAGE_BASE_URL}/w200${poster_path}`}
                        alt={title}
                      />
                      <SearchedTitle>
                        {movie ? original_title : original_name}
                      </SearchedTitle>
                      <SearchedDate>
                        {movie
                          ? release_date.slice(0, 4)
                          : first_air_date.slice(0, 4)}
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
