import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMedia, fetchMediaCredits } from "../api";
import TabBundle from "../components/Detail/TabBundle";
import Trailers from "../components/Detail/Trailer";
import Poster from "../components/Detail/Poster";
import Reviews from "../components/Detail/Review";
import { Helmet } from "react-helmet-async";

const ShowMainInfo = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.bgColor};
  padding-top: 3.2em;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    background-color: inherit;
  }
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
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  const getMedia = useCallback(async () => {
    const json = await fetchMedia(movie, id);
    setData(json);
  }, [id, movie]);

  const getMediaCredits = useCallback(async () => {
    const json = await fetchMediaCredits(movie, id);
    setCredits(json.cast);
  }, [id, movie]);

  useEffect(() => {
    getMedia();
    getMediaCredits();
  }, [getMedia, getMediaCredits]);

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
        <Reviews movie={movie} id={id} />
        <Trailers movie={movie} id={id} />
      </ShowOthers>
    </>
  );
}

export default Detail;
