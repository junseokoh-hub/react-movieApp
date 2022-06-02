import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../Config";
import styled from "styled-components";

const SeparatePoster = styled.img`
  display: block;
  margin: 1em 0 0 1em;
  width: 15em;
`;

function Detail({ movie }) {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState({});
  const { id } = useParams();

  const fetchMedia = useCallback(async () => {
    const response = await fetch(
      `https://${API_URL}${
        movie ? "movie" : "tv"
      }/${id}?api_key=${API_KEY}&language=en-US`,
    );
    const json = await response.json();
    console.log(json);
    setData(json);
  }, [id, movie]);

  const fetchMediaVideos = useCallback(async () => {
    const response = await fetch(
      `https://${API_URL}${
        movie ? "movie" : "tv"
      }/${id}/videos?api_key=${API_KEY}&language=en-US`,
    );
    const json = await response.json();
    console.log(json);
    setShowData(json);
  }, [id, movie]);

  useEffect(() => {
    fetchMedia();
    fetchMediaVideos();
  }, [fetchMedia, fetchMediaVideos]);

  return (
    <>
      <div>
        {data && (
          <SeparatePoster
            src={`https://${IMAGE_BASE_URL}/w200${data.poster_path}`}
            alt={data.title}
          />
        )}
        <div style={{ width: "15em", marginLeft: "1em" }}>
          {data.genres &&
            data.genres.map((item) => {
              return (
                <span
                  style={{
                    display: "inline-block",
                    margin: "0 0.5em",
                  }}
                >
                  {item.name}
                </span>
              );
            })}
        </div>
        {data && <p>{data.homepage}</p>}
        {showData.results && (
          <iframe
            style={{ width: "30em", height: "25em" }}
            title={showData.results[0].id}
            src={`https://www.youtube.com/embed/${showData.results[0].key}?autoplay=1`}
          ></iframe>
        )}
      </div>
    </>
  );
}

export default Detail;
