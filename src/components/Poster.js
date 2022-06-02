import { IMAGE_BASE_URL } from "../Config";
import styled from "styled-components";
import React from "react";

const SeparatePoster = styled.img`
  display: block;
  width: 15em;
`;
function Poster({ data }) {
  return (
    <>
      {data.poster_path && (
        <SeparatePoster
          src={`https://${IMAGE_BASE_URL}/w300${data.poster_path}`}
          alt={data.title}
        />
      )}
    </>
  );
}

export default Poster;
