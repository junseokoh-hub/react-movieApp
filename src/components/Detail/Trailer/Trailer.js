import styled from "styled-components";
import React from "react";

const MoreInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SeparateVideos = styled.iframe`
  width: 19em;
  height: 12em;
`;

function Trailers({ showData }) {
  return (
    <MoreInfo>
      {showData.results &&
        showData.results.slice(0, 2).map((item) => {
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
