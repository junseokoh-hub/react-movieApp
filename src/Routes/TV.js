import React, { useContext } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import MovieList from "../components/MovieList/";
import { TopContext } from "../Context/TopContext";

const MovieContainer = styled.div`
  position: relative;
  .arrow-up {
    cursor: pointer;
    font-size: 1.2em;
    position: absolute;
    right: 10px;
  }
`;

function Tv() {
  const { backToTop } = useContext(TopContext);

  return (
    <MovieContainer>
      <MovieList apiList="popular" />
      <MovieList apiList="on_the_air" />
      <MovieList apiList="top_rated" />
      <FaArrowCircleUp className="arrow-up" onClick={backToTop} />
    </MovieContainer>
  );
}

export default Tv;
