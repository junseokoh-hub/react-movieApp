import styled from "styled-components";
import React from "react";

const MoreInfo = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
  overflow-x: auto;
`;

const SeparateVideos = styled.iframe`
  width: 70%;
  height: 12em;
`;

function Trailers({ showData }) {
  return (
    <MoreInfo>
      {showData.results &&
        showData.results.slice(0, 4).map((item) => {
          return (
            <SeparateVideos
              key={item.id}
              title={item.name}
              src={`https://www.youtube.com/embed/${item.key}`}
            ></SeparateVideos>
          );
        })}
    </MoreInfo>
  );
}

export default Trailers;
