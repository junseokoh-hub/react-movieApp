import React, { useEffect, useState, useCallback } from "react";
import { fetchMediaSimilarShows } from "../api";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../Config";
import styled from "styled-components";
import SimilarShowContent from "../components/SimilarShows/SimilarShowContent";

const SimilarList = styled.li`
  display: flex;
  margin: 0 0 0.5em 0;
  border-bottom: 1px solid grey;
  padding: ${(props) => props.theme.smallGap} 0.1em;
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
              <SimilarShowContent movie={movie} item={item} />
            </SimilarList>
          );
        })}
    </ul>
  );
}

export default SimilarShows;
