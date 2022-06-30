import React from "react";
import styled from "styled-components";
import { fetchMediaVideos } from "../../../api";
import { useQuery } from "react-query";

const TrailersIndicator = styled.h4`
  color: ${(props) => props.theme.whiteColor};
  margin: 0 auto;
  margin-top: 2em;
  padding-bottom: 0.6em;
`;

const MoreInfo = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const SeparateVideos = styled.iframe`
  width: 50%;
  height: 20em;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

function Trailers({ movie, id }) {
  const { data: videos } = useQuery(["videos", id], () =>
    fetchMediaVideos(movie, id),
  );

  return (
    <>
      {videos?.results.length === 0 ? (
        <div>Hello</div>
      ) : (
        <>
          <TrailersIndicator>Trailers</TrailersIndicator>
          <MoreInfo>
            {videos?.results.slice(0, 4).map((item) => {
              return (
                <SeparateVideos
                  key={item.id}
                  title={item.name}
                  src={`https://www.youtube.com/embed/${item.key}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></SeparateVideos>
              );
            })}
          </MoreInfo>
        </>
      )}
    </>
  );
}

export default Trailers;
