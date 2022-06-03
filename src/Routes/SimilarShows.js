import React, { useEffect, useState, useCallback } from "react";
import { fetchMediaSimilarShows } from "../api";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../Config";

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
    <ul>
      {similarities.results &&
        similarities.results.slice(0, 3).map((item) => {
          return (
            <li style={{ display: "flex" }} key={item.id}>
              <img
                src={`https://${IMAGE_BASE_URL}/w200${item.poster_path}`}
                alt={movie ? item.original_title : item.original_name}
              />
              <ul>
                <li style={{ marginBottom: "0.5em" }}>
                  {movie ? item.title : item.name}
                  <span style={{ marginLeft: "0.5em" }}>
                    (
                    {movie
                      ? item.release_date.slice(0, 4)
                      : item.first_air_date.slice(0, 4)}
                    )
                  </span>
                </li>
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: `#192a56` }}>Overview</span>
                  <span>{item.overview}...</span>
                </li>
                <li>
                  {item.vote_average.toFixed(1)}&nbsp;
                  {item.original_language.toUpperCase()}
                </li>
              </ul>
            </li>
          );
        })}
    </ul>
  );
}

export default SimilarShows;
