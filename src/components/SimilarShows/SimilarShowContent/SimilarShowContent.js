import React from "react";
import styled from "styled-components";

const SimilarShowUl = styled.ul`
  width: 50%;
  margin-left: ${(props) => props.theme.smallGap};
`;

const SimilarShowListTitle = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.smallGap};
`;

const SimilarShowListCreated = styled.span`
  margin-left: ${(props) => props.theme.smallGap};
`;

const SimilarShowListOverview = styled(SimilarShowListTitle)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: calc(${(props) => props.theme.smallGap}*4);
`;

const SimilarShowListOverviewTitle = styled.h4`
  color: #192a56;
  color: ${(props) => props.theme.whiteColor};
`;

const SimilarShowListOverviewContent = styled.p`
  font-style: oblique;
  padding-top: ${(props) => props.theme.smallGap};
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

const SimilarShowPreference = styled.li`
  display: flex;
  align-items: center;
  padding-top: 1em;
`;

const SimilarShowLanguage = styled.span`
  font-size: 1.4em;
  font-weight: 600;
  margin-left: 0.8em;
`;

function SimilarShowContent({ movie, item }) {
  return (
    <SimilarShowUl>
      <SimilarShowListTitle>
        <h3>{movie ? item.title : item.name}</h3>
        <SimilarShowListCreated>
          (
          {movie
            ? item.release_date.slice(0, 4)
            : item.first_air_date.slice(0, 4)}
          )
        </SimilarShowListCreated>
      </SimilarShowListTitle>
      <SimilarShowListOverview>
        <SimilarShowListOverviewTitle>Overview</SimilarShowListOverviewTitle>
        <SimilarShowListOverviewContent>
          {item.overview}...
        </SimilarShowListOverviewContent>
      </SimilarShowListOverview>
      <SimilarShowPreference>
        <VoteRateCircle value={item.vote_average.toFixed(1)}></VoteRateCircle>
        <SimilarShowLanguage>
          {item.original_language.toUpperCase()}
        </SimilarShowLanguage>
      </SimilarShowPreference>
    </SimilarShowUl>
  );
}

export default SimilarShowContent;
