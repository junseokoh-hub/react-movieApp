import React, { useContext } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import MovieList from "../components/MovieList";
import BigScreen from "../components/BigScreen";
import { TopContext } from "../Context/TopContext";
import { ToggleVideoAtom } from "../Recoil/ToggleAtom";
import { useRecoilValue } from "recoil";

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

function Home() {
  const { backToTop } = useContext(TopContext);
  const toggleVideo = useRecoilValue(ToggleVideoAtom);
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return (
    <MovieContainer>
      <BigScreen />
      {!toggleVideo ? (
        <>
          <MovieList movie apiList="popular" />
          <MovieList movie apiList="upcoming" />
          <MovieList movie apiList="top_rated" />
        </>
      ) : null}

      {toggleVideo || (
        <FaArrowCircleUp className="arrow-up" onClick={backToTop} />
      )}
    </MovieContainer>
  );
}

export default Home;
