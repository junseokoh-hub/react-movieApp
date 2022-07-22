import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { handleImgError } from "../../ErrorImg";
import { useRecoilValue } from "recoil";
import { ToggleVideoAtom } from "../../Recoil/ToggleAtom";

const UnorderedList = styled.ul`
  display: ${(props) => props.display};
  flex-wrap: wrap;
`;

const List = styled.li`
  width: 6em;
  margin: 1em ${(props) => props.theme.smallGap};
  a {
    text-decoration-line: none;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    /* margin: 1em 0 0 0; */
    margin: 0 auto;
  }
`;

const ClassficiationTitle = styled.h2`
  padding: ${(props) => props.theme.smallGap};
  text-transform: uppercase;
  color: ${(props) => props.theme.darkBlueColor};
  display: ${(props) => props.display};
  @media screen and (max-width: 500px) {
    padding-left: 0.6em;
  }
`;

const Poster = styled.img`
  width: 5em;
  height: 120px;
  margin-bottom: ${(props) => props.theme.smallGap};
  border-radius: ${(props) => props.theme.smallGap};
  transition: transform 0.1s linear;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 500px) {
    width: 4em;
  }
`;

const ListHeader = styled.span`
  font-size: 0.8em;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.whiteColor};
  @media screen and (max-width: 500px) {
    font-size: 0.4em;
  }
`;

function MovieList({ movie, apiList }) {
  const [data, setData] = useState([]);
  const toggleVideo = useRecoilValue(ToggleVideoAtom);

  useEffect(() => {
    async function apiCall() {
      try {
        const response = await fetch(
          `https://${API_URL}${
            movie ? "movie" : "tv"
          }/${apiList}?api_key=${API_KEY}&language=en-US`,
        );
        const json = await response.json();
        setData(json.results);
      } catch (err) {
        console.log(err);
      }
    }
    apiCall();
  }, [movie, apiList]);

  return (
    <>
      <Helmet>
        <title>{movie ? "Movie" : "TV"}</title>
      </Helmet>
      <ClassficiationTitle display={toggleVideo ? "none" : "block"}>
        {apiList}
      </ClassficiationTitle>
      <UnorderedList display={toggleVideo ? "none" : "flex"}>
        {data.map((item) => {
          return (
            <List key={item.id}>
              <Link to={`/${movie ? "movie" : "tv"}/${item.id}`}>
                <Poster
                  src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                  alt={item.original_title}
                  onError={handleImgError}
                />
                {movie ? (
                  <ListHeader>{item.title}</ListHeader>
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
