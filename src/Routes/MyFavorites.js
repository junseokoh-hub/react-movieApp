import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../Config";
import { getCookie } from "../Cookie";
import { accountSelector } from "../Recoil/AccountAtom";
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
  const accountId = useRecoilValue(accountSelector);
  const { data, isLoading } = useQuery(["movie", "favorites"], async () => {
    const response = await fetch(
      `https://${API_URL}account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${getCookie(
        "tmdbsession",
      )}`,
    );
    const json = await response.json();
    return json;
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <Wrapper>
      <Grid>
        {data?.results?.map((item) => (
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
