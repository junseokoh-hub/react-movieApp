import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../Config";

function Detail({ movie }) {
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const response = await fetch(
      `https://${API_URL}${
        movie ? "movie" : "tv"
      }/${id}?api_key=${API_KEY}&language=en-US`,
    );
    const json = await response.json();
    console.log(json);
  }, [id, movie]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <>{movie ? <div>Movie Detail</div> : <div>TV Detail</div>}</>;
}

export default Detail;
