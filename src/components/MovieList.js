import { API_KEY, API_URL, IMAGE_BASE_URL } from "../Config";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration-line: none;
  }
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6em;
  margin: 1em ${(props) => props.theme.smallGap};
`;

const ClassficiationTitle = styled.h2`
  padding: ${(props) => props.theme.smallGap};
  text-transform: uppercase;
`;

const Poster = styled.img`
  width: 5em;
  margin-bottom: ${(props) => props.theme.smallGap};
`;

const ListHeader = styled.span`
  font-size: 0.8em;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.whiteColor};
`;

function MovieList({ movie, apiList }) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function apiCall() {
      try {
        const response = await fetch(
          `https://${API_URL}${
            movie ? "movie" : "tv"
          }/${apiList}?api_key=${API_KEY}&language=en-US`,
        );
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (err) {
        console.log(err);
      }
    }
    apiCall();
  }, [movie, apiList]);

  return (
    <>
      <ClassficiationTitle>{apiList}</ClassficiationTitle>
      <UnorderedList>
        {data.results &&
          data.results.map((item) => {
            return (
              <List key={item.id}>
                <Link to={`/${movie ? "movie" : "tv"}/${item.id}`}>
                  <Poster
                    src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                    alt={item.original_title}
                  />
                  {movie ? (
                    <ListHeader>
                      {item.title.length > 10
                        ? `${item.title.slice(0, 10)}...`
                        : item.title}
                    </ListHeader>
                  ) : (
                    <ListHeader>{item.original_name}</ListHeader>
                  )}
                </Link>
              </List>
            );
          })}
      </UnorderedList>
      <br />
    </>
  );
}

export default MovieList;
