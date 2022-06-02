import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../Config";
import styled from "styled-components";

const ShowMainInfoUl = styled.ul`
  background-color: rgb(0, 0, 0, 0.5);
`;

const ShowMainInfoLi = styled.li`
  display: flex;
`;

const SeparatePoster = styled.img`
  display: block;
  margin: 0.5em 0 0.5em 0.5em;
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
      {data && (
        <ShowMainInfoUl>
          <ShowMainInfoLi>
            <SeparatePoster
              src={`https://${IMAGE_BASE_URL}/w200${data.poster_path}`}
              alt={data.title}
            />
            <ul style={{ width: "70%", margin: "0 auto" }}>
              <li>
                {movie ? (
                  <h3>
                    {data.original_title}
                    <span>({data.release_date.slice(0, 4)})</span>
                  </h3>
                ) : (
                  <h3>{data.original_name}</h3>
                )}
                {data.genres.map((item) => {
                  return <span>{item.name}</span>;
                })}
                {<VoteRateCircle value={data.vote_average}></VoteRateCircle>}
                {<p>{data.overview.slice(0, 140)}...</p>}
              </li>
            </ul>
          </ShowMainInfoLi>
        </ShowMainInfoUl>
      )}
      <MoreInfo>
        {showData.results &&
          showData.results.slice(0, 2).map((item) => {
            return (
              <SeparateVideos
                title={item.id}
                src={`https://www.youtube.com/embed/${item.key}?autoplay=1`}
              ></SeparateVideos>
            );
          })}
      </MoreInfo>
    </>
  );
}

export default Detail;
