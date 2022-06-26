import React, { useContext } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import MovieList from "../components/MovieList";
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

function Home() {
  const { backToTop } = useContext(TopContext);

  return (
    <MovieContainer>
      <MovieList movie apiList="popular" />
      <MovieList movie apiList="upcoming" />
      <MovieList movie apiList="top_rated" />
      <FaArrowCircleUp className="arrow-up" onClick={backToTop} />
    </MovieContainer>
  );
}

export default Home;
