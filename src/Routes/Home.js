import MovieList from "../components/MovieList";
import React from "react";

function Home() {
  return (
    <>
      <MovieList movie apiList="popular" />
      <MovieList movie apiList="upcoming" />
      <MovieList movie apiList="top_rated" />
    </>
  );
}

export default Home;
