import styled from "styled-components";
import React from "react";

const MoreInfo = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
`;

const SeparateVideos = styled.iframe`
  width: 50%;
  height: 20em;
`;

function Trailers({ showData }) {
  return (
    <MoreInfo>
      {showData.slice(0, 4).map((item) => {
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
