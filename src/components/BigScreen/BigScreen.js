import React from "react";
import styled from "styled-components";
import { fetchTrending } from "../../api";
import { IMAGE_BASE_URL } from "../../Config";
import { useQuery } from "react-query";

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
  @media screen and (max-width: 500px) {
    background-size: 500px 100%;
    background-repeat: no-repeat;
  }
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

function BigScreen() {
  const { data, isLoading, isError } = useQuery("trending", fetchTrending);
  console.log(data);

  if (isError) {
    return <span>Error: {isError.message}</span>;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Screen
          bgImage={`https://${IMAGE_BASE_URL}/w200${data?.results[0].backdrop_path}`}
        >
          <ScreenTitle>{data?.results[0].title}</ScreenTitle>
          <ScreenOverview>{data?.results[0].overview}</ScreenOverview>
        </Screen>
      )}
    </>
  );
}

export default BigScreen;
