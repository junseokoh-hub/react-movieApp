import React, { useContext } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import MovieList from "../components/MovieList/";
import BigScreen from "../components/BigScreen";
import { TopContext } from "../Context/TopContext";
import { ToggleContext } from "../Context/ToggleContext";

const MovieContainer = styled.div`
  position: relative;
  padding-bottom: 2em;
  .arrow-up {
    cursor: pointer;
    font-size: 1.2em;
    position: absolute;
    right: 10px;
  }
`;

function Tv() {
  const { backToTop } = useContext(TopContext);
  const { toggleVideo } = useContext(ToggleContext);
  return (
    <MovieContainer>
      <BigScreen />
      <MovieList apiList="popular" />
      <MovieList apiList="on_the_air" />
      <MovieList apiList="top_rated" />
      {toggleVideo || (
        <FaArrowCircleUp className="arrow-up" onClick={backToTop} />
      )}
    </MovieContainer>
  );
}

export default Tv;
