import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  fetchMedia,
  fetchMediaVideos,
  fetchMediaReviews,
  fetchMediaCredits,
} from "../api";
import TabBundle from "../components/Detail/TabBundle";
import Trailers from "../components/Detail/Trailer";
import Poster from "../components/Detail/Poster";
import Reviews from "../components/Detail/Review";
import { Helmet } from "react-helmet-async";

const ShowMainInfo = styled.div`
  display: flex;
  background-color: #1e272e;
`;

const ShowOthers = styled.div`
  display: flex;
  padding: ${(props) => props.theme.smallGap};
  flex-direction: column;
  h3 {
    text-align: center;
    color: #000;
  }
`;

function Detail({ movie }) {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  const getMedia = useCallback(async () => {
    const json = await fetchMedia(movie, id);
    setData(json);
  }, [id, movie]);

  const getMediaVideos = useCallback(async () => {
    const json = await fetchMediaVideos(movie, id);
    setShowData(json.results);
  }, [id, movie]);

  const getMediaReviews = useCallback(async () => {
    const json = await fetchMediaReviews(movie, id);
    setReviews(json.results);
  }, [id, movie]);

  const getMediaCredits = useCallback(async () => {
    const json = await fetchMediaCredits(movie, id);
    setCredits(json.cast);
  }, [id, movie]);

  useEffect(() => {
    getMedia();
    getMediaVideos();
    getMediaReviews();
    getMediaCredits();
  }, [getMedia, getMediaVideos, getMediaReviews, getMediaCredits]);

  return (
    <>
      <Helmet>
        <title>
          {movie
            ? `Movie - ${data.original_title}`
            : `TV - ${data.original_name}`}
        </title>
      </Helmet>
      <ShowMainInfo>
        <Poster data={data} />
        <TabBundle data={data} movie={movie} credits={credits} />
      </ShowMainInfo>

      <ShowOthers>
        <h3>Reviews</h3>
        <Reviews reviews={reviews} />
        {showData.length === 0 ? (
          <div>Hello</div>
        ) : (
          <>
            <h3>Trailers</h3>
            <Trailers showData={showData} />
          </>
        )}
      </ShowOthers>
    </>
  );
}

export default Detail;
