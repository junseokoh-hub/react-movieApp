import React from "react";
import MovieList from "../components/MovieList/";

function Tv() {
  return (
    <>
      <MovieList apiList="popular" />
      <MovieList apiList="on_the_air" />
      <MovieList apiList="top_rated" />
    </>
  );
}

export default Tv;
