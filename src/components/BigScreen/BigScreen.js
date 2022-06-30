import React, { useContext } from "react";
import styled from "styled-components";
import { fetchMediaVideos, fetchTrending } from "../../api";
import { IMAGE_BASE_URL } from "../../Config";
import { useQuery } from "react-query";
import { ToggleContext } from "../../Context/ToggleContext";

const Screen = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4em;
  background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${(props) => props.bgImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  @media screen and (max-width: 500px) {
    background-size: 500px 100%;
    background-repeat: no-repeat;
  }
`;
const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ScreenTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const ScreenOverview = styled.p`
  font-size: 1.5em;
  width: 50%;
  @media screen and (max-width: 500px) {
    font-size: 1em;
  }
`;

const ToggleButton = styled.button`
  margin-top: 0.3em;
  width: 3em;
  border: 1px solid #fff;
  background-color: #3d3d3d;
  font-size: 2em;
  color: whitesmoke;
  padding: 0.3em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function BigScreen({ movie }) {
  const { toggleVideo, setToggleVideo } = useContext(ToggleContext);

  const {
    data,
    isLoading: trendingLoading,
    isError,
    error,
  } = useQuery("trending", fetchTrending, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const { data: newData, isLoading: videoLoading } = useQuery("mainVideo", () =>
    fetchMediaVideos(movie, data?.results[0]?.id),
  );

  const isLoading = trendingLoading || videoLoading;

  const onToggle = () => {
    setToggleVideo((prev) => !prev);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Screen
      bgImage={`https://${IMAGE_BASE_URL}/w200${data?.results[0]?.backdrop_path}`}
    >
      {toggleVideo ? (
        <IFrame
          title={newData.id}
          src={`https://www.youtube.com/embed/${
            newData.results?.length > 0 && newData?.results[0]?.key
          }?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <ScreenTitle>{data?.results[0]?.title}</ScreenTitle>
          <ScreenOverview>{data?.results[0]?.overview}</ScreenOverview>
          <ToggleButton onClick={onToggle}>Play</ToggleButton>
        </>
      )}
    </Screen>
  );
}

export default BigScreen;
