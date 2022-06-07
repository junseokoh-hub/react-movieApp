import React from "react";
import { IMAGE_BASE_URL } from "../../../Config";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchContainer = styled.div`
  padding-bottom: 0.4em;
`;

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

function SearchedContent({ searchData }) {
  return (
    <SearchContainer>
      <SearchedType
        display={searchData.results === undefined ? "none" : "flex"}
      >
        Movie
      </SearchedType>
      <SearchedUl>
        {searchData.results &&
          searchData.results
            .filter((item) => item.media_type === "movie")
            .map((item) => {
              return (
                <Link key={item.id} to={`/movie/${item.id}`}>
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
                    <SearchedDate>{item.release_date.slice(0, 4)}</SearchedDate>
                  </SearchedLi>
                </Link>
              );
            })}
      </SearchedUl>
      <SearchedType
        display={searchData.results === undefined ? "none" : "flex"}
      >
        TV Show
      </SearchedType>
      <SearchedUl>
        {searchData.results &&
          searchData.results
            .filter((item) => item.media_type === "tv")
            .map((item) => {
              return (
                <Link key={item.id} to={`/tv/${item.id}`}>
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
                    <SearchedTitle>{item.original_name}</SearchedTitle>
                    <SearchedDate>
                      {item.first_air_date.slice(0, 4)}
                    </SearchedDate>
                  </SearchedLi>
                </Link>
              );
            })}
      </SearchedUl>
    </SearchContainer>
  );
}

export default SearchedContent;
