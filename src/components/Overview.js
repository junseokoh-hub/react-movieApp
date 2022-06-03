import React from "react";
import styled from "styled-components";

const OverviewTitle = styled.h3`
  margin-top: 0.5em;
`;

const OverviewCreator = styled.div`
  margin-top: ${(props) => props.theme.smallGap};
`;

function TotalOverview({ data, movie }) {
  return (
    <>
      <OverviewTitle>Overview</OverviewTitle>
      <p>{data.overview && data.overview.slice(0, 200)}...</p>
      <OverviewCreator>
        {movie ? <h3>Production</h3> : <h3>Creator</h3>}
        {movie
          ? data.production_companies &&
            data.production_companies.map((item) => {
              return <span key={item.id}> {item.name}</span>;
            })
          : data.created_by &&
            data.created_by.map((item) => {
              return <span key={item.id}>{item.name}</span>;
            })}
      </OverviewCreator>
    </>
  );
}

export default TotalOverview;
