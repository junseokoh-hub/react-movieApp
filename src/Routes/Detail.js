import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMedia, fetchMediaVideos, fetchMediaReviews } from "../api";
import ShowInformation from "../components/ShowInfo";
import Trailers from "../components/Trailer";
import Poster from "../components/Poster";
import Reviews from "../components/Reviews";

const ShowMainInfo = styled.div`
  display: flex;
  background-color: #1e272e;
`;

function Detail({ movie }) {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState({});
  const [reviews, setReviews] = useState({});
  const { id } = useParams();

  const getMedia = useCallback(async () => {
    const json = await fetchMedia(movie, id);
    console.log("getMedia json", json);
    setData(json);
  }, [id, movie]);

  const getMediaVideos = useCallback(async () => {
    const json = await fetchMediaVideos(movie, id);
    console.log("getMediaVideos json", json);
    setShowData(json);
  }, [id, movie]);

  const getMediaReviews = useCallback(async () => {
    const json = await fetchMediaReviews(movie, id);
    console.log("getMediaReviews json", json);
    setReviews(json);
  }, [id, movie]);

  useEffect(() => {
    getMedia();
    getMediaVideos();
    getMediaReviews();
  }, [getMedia, getMediaVideos, getMediaReviews]);

  return (
    <>
      <ShowMainInfo>
        <Poster data={data} />
        <ShowInformation data={data} movie={movie} />
      </ShowMainInfo>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5em 0.5em 0 0.5em",
        }}
      >
        <Reviews reviews={reviews} />
        <Trailers showData={showData} />
      </div>
    </>
  );
}

export default Detail;
