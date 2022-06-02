import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../Config";
import styled from "styled-components";
import { fetchMedia, fetchMediaVideos } from "../api";

const ShowMainInfo = styled.div`
  display: flex;
  background-color: rgb(0, 0, 0, 0.5);
`;

const ShowInfoUl = styled.ul`
  width: 50%;
  background-color: transparent;
  margin-top: 0.5em;
`;

const SeparatePoster = styled.img`
  display: block;
  margin: 0.5em;
  width: 15em;
`;

const SeparateVideos = styled.iframe`
  width: 15em;
  height: 12em;
`;

const MoreInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const VoteRateCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColor};
  color: black;
  opacity: 0.8;
  margin-top: 0.5em;
  &::before {
    position: absolute;
    content: "${(props) => props.value}";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: ${(props) => props.theme.whiteColor};
  }
`;

const Overview = styled.p`
  margin-top: 0.5em;
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
        {data.poster_path && (
          <SeparatePoster
            src={`https://${IMAGE_BASE_URL}/w300${data.poster_path}`}
            alt={data.title}
          />
        )}
        <ShowInfoUl>
          <li>
            {movie ? (
              <h2>
                {data.original_title}
                <span>
                  ({data.realease_date && data.release_date.slice(0, 4)})
                </span>
              </h2>
            ) : (
              <h2>{data.original_name}</h2>
            )}
            {data.genres &&
              data.genres.map((item, index) => {
                return (
                  <span key={index} style={{ margin: "0 1em" }}>
                    {item.name}
                  </span>
                );
              })}
            <VoteRateCircle value={data.vote_average}></VoteRateCircle>
            <h3 style={{ marginTop: "0.5em" }}>Overview</h3>
            <Overview>
              {data.overview && data.overview.slice(0, 140)}...
            </Overview>
            <div style={{ marginTop: "0.5em" }}>
              {movie ? <h5>Production</h5> : <h5>Creator</h5>}
              {movie
                ? data.production_companies &&
                  data.production_companies.map((item) => {
                    return <span key={item.id}> {item.name}</span>;
                  })
                : data.created_by &&
                  data.created_by.map((item) => {
                    return <span key={item.id}>{item.name}</span>;
                  })}
            </div>
          </li>
        </ShowInfoUl>
      </ShowMainInfo>
      <MoreInfo>
        {showData.results &&
          showData.results.slice(0, 2).map((item) => {
            return (
              <SeparateVideos
                key={item.id}
                title={item.name}
                src={`https://www.youtube.com/embed/${item.key}?autoplay=1`}
              ></SeparateVideos>
            );
          })}
      </MoreInfo>
    </>
  );
}

export default Detail;
