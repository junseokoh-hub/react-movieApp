import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMedia, fetchMediaVideos } from "../api";
import TabIntro from "../components/ShowInfo";
import Trailers from "../components/Trailer";
import Poster from "../components/Poster";

const ShowMainInfo = styled.div`
  display: flex;
  background-color: rgb(0, 0, 0, 0.5);
`;

function Detail({ movie }) {
  const [data, setData] = useState({});
  const [showData, setShowData] = useState({});
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

  useEffect(() => {
    getMedia();
    getMediaVideos();
  }, [getMedia, getMediaVideos]);

  return (
    <>
      <ShowMainInfo>
        <Poster data={data} />
        <TabIntro data={data} movie={movie} />
      </ShowMainInfo>
      <Trailers showData={showData} />
    </>
  );
}

export default Detail;
