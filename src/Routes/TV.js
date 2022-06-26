import React, { useContext } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import MovieList from "../components/MovieList/";
import { TopContext } from "../Context/TopContext";

function Tv() {
  const { backToTop } = useContext(TopContext);

  return (
    <>
      <MovieList apiList="popular" />
      <MovieList apiList="on_the_air" />
      <MovieList apiList="top_rated" />
      <FaArrowCircleUp className="arrow-up" onClick={backToTop} />
    </>
  );
}

export default Tv;
