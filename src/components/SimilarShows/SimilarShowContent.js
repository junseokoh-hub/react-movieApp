import React from "react";
import styled from "styled-components";

const SimilarShowUl = styled.ul`
  width: 50%;
  margin-left: ${(props) => props.theme.smallGap};
`;

const SimilarShowListTitle = styled.li`
  margin-bottom: ${(props) => props.theme.smallGap};
`;

const SimilarShowListCreated = styled.span`
  margin-left: ${(props) => props.theme.smallGap};
`;

const SimilarShowListOverview = styled(SimilarShowListTitle)`
  display: flex;
  flex-direction: column;
`;

const SimilarShowListOverviewTitle = styled.span`
  color: #192a56;
`;

function SimilarShowContent({ movie, item }) {
  return (
    <SimilarShowUl>
      <SimilarShowListTitle>
        {movie ? item.title : item.name}
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
        <span>{item.overview}...</span>
      </SimilarShowListOverview>
      <li>
        {item.vote_average.toFixed(1)}&nbsp;
        {item.original_language.toUpperCase()}
      </li>
    </SimilarShowUl>
  );
}

export default SimilarShowContent;
