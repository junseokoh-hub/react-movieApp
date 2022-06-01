import React from "react";
import MovieList from "../components/MovieList";

function Tv() {
  return (
    <>
      <MovieList tvShow apiList="popular" />
      <MovieList tvShow apiList="on_the_air" />
      <MovieList tvShow apiList="top_rated" />
    </>
  );
}

export default Tv;
