import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../Config";

function Detail() {
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const response = await fetch(
      `https://${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    const json = await response.json();
    console.log(json);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <div>Details</div>;
}

export default Detail;
