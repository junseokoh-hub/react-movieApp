import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { IMAGE_BASE_URL } from "../Config";
import { favMovieSelector } from "../Recoil/AccountAtom";
import { handleImgError } from "../ErrorImg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  width: 70vw;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
`;

const FavMovie = styled.div`
  width: 10em;
  height: 15em;
  border-radius: 10px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
`;

function MyFavorites() {
  console.log("rendered");
  const favMovie = useRecoilValue(favMovieSelector);
  return (
    <Wrapper>
      <Grid>
        {favMovie?.results?.map((item) => (
          <FavMovie
            key={item.id}
            bgphoto={`https://${IMAGE_BASE_URL}/original/${item.poster_path}`}
            alt={item.original_title}
            onError={handleImgError}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default MyFavorites;
