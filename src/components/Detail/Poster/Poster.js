import { IMAGE_BASE_URL } from "../../../Config";
import styled from "styled-components";
import React from "react";
import { handleImgError } from "../../../ErrorImg";

const SeparatePoster = styled.img`
  display: block;
  width: 15em;
  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
`;

function Poster({ data }) {
  return (
    <>
      {data.poster_path && (
        <SeparatePoster
          src={`https://${IMAGE_BASE_URL}/w300${data.poster_path}`}
          alt={data.title}
          onError={handleImgError}
        />
      )}
    </>
  );
}

export default Poster;
