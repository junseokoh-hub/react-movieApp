import React, { useEffect, useState, useCallback } from "react";
import { fetchMediaSimilarShows } from "../api";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../Config";
import styled from "styled-components";

const SimilarList = styled.li`
  display: flex;
  margin: 0 0 0.5em 0;
  border-bottom: 1px solid grey;
  padding: ${(props) => props.theme.smallGap} 0.1em;
`;

const SimilarShowUl = styled.ul`
  width: 50%;
  margin-left: ${(props) => props.theme.smallGap};
`;

const SimilarShowListTitle = styled.li`
  margin-bottom: ${(props) => props.theme.smallGap};
`;

const SimilarShowListCreated = styled.span`
  margin-left: ${(props) => props.theme.smallGap};
`;

const SimilarShowListOverview = styled(SimilarShowListTitle)`
  display: flex;
  flex-direction: column;
`;

const SimilarShowListOverviewTitle = styled.span`
  color: #192a56;
`;

function SimilarShows({ movie }) {
  const [similarities, setSimilarities] = useState({});
  const { id } = useParams();
  const getMediaSimilarShows = useCallback(async () => {
    const json = await fetchMediaSimilarShows(movie, id);
    console.log("getMediaSimilarShows json", json);
    setSimilarities(json);
  }, [id, movie]);

  useEffect(() => {
    getMediaSimilarShows();
  }, [getMediaSimilarShows]);

  return (
    <ul style={{ backgroundColor: "#2f3640" }}>
      {similarities.results &&
        similarities.results.slice(0, 10).map((item) => {
          return (
            <SimilarList key={item.id}>
              <img
                src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                alt={movie ? item.original_title : item.original_name}
              />
              <SimilarShowUl>
                <SimilarShowListTitle>
                  {movie ? item.title : item.name}
                  <SimilarShowListCreated>
                    (
                    {movie
                      ? item.release_date.slice(0, 4)
                      : item.first_air_date.slice(0, 4)}
                    )
                  </SimilarShowListCreated>
                </SimilarShowListTitle>
                <SimilarShowListOverview>
                  <SimilarShowListOverviewTitle>
                    Overview
                  </SimilarShowListOverviewTitle>
                  <span>{item.overview}...</span>
                </SimilarShowListOverview>
                <li>
                  {item.vote_average.toFixed(1)}&nbsp;
                  {item.original_language.toUpperCase()}
                </li>
              </SimilarShowUl>
            </SimilarList>
          );
        })}
    </ul>
  );
}

export default SimilarShows;
