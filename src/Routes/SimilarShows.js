import React, { useEffect, useState, useCallback } from "react";
import { fetchMediaSimilarShows } from "../api";
import { useParams, Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../Config";
import styled from "styled-components";
import SimilarShowContent from "../components/SimilarShows/SimilarShowContent";

const SimilarUl = styled.ul`
  background-color: #2f3640;
  padding-top: 3.2em;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 1em 0 0;
  }
`;

const SimilarList = styled.li`
  display: flex;
  margin: 0 0 0.5em 0;
  border-bottom: 1px solid grey;
  padding: ${(props) => props.theme.smallGap} 0.1em;
  a {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    a {
      display: flex;
      flex-direction: column;
      img {
        display: inline-block;
        width: 15em;
        height: 15em;
        margin: 0 auto;
      }
    }
  }
`;

function SimilarShows({ movie }) {
  const [similarities, setSimilarities] = useState([]);

  const { id } = useParams();

  const getMediaSimilarShows = useCallback(async () => {
    const json = await fetchMediaSimilarShows(movie, id);
    setSimilarities(json.results);
  }, [id, movie]);

  useEffect(() => {
    getMediaSimilarShows();
  }, [getMediaSimilarShows]);

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  return (
    <SimilarUl>
      {similarities.slice(0, 10).map((item) => {
        return (
          <SimilarList key={item.id}>
            <Link to={`/${movie ? "movie" : "tv"}/${item.id}`}>
              <img
                src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                alt={movie ? item.original_title : item.original_name}
              />
              <SimilarShowContent movie={movie} item={item} />
            </Link>
          </SimilarList>
        );
      })}
    </SimilarUl>
  );
}

export default SimilarShows;
