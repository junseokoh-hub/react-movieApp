import React, { /*useEffect,*/ useState /*useCallback*/ } from "react";
import styled from "styled-components";
import ReviewTextarea from "./ReviewTextarea";
import ReviewList from "./ReviewList";
import { fetchMediaReviews } from "../../../api";
import { useQuery } from "react-query";

const ReviewIndicator = styled.h4`
  color: ${(props) => props.theme.whiteColor};
  margin: 0 auto;
  margin-top: 2em;
  padding-bottom: 0.6em;
`;

const ReviewContainer = styled.ul`
  width: 80%;
  height: 12em;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0.5em;
  margin-bottom: ${(props) => props.theme.smallGap};
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (max-width: 500px) {
    li {
      margin-bottom: 1em;
    }
  }
`;

const ReviewUsername = styled.span`
  color: ${(props) => props.theme.darkBlueColor};
  font-size: calc(${(props) => props.theme.smallGap}*3);
  font-weight: 900;
  padding-left: ${(props) => props.theme.smallGap};
`;

const ReviewContent = styled.p`
  a {
    display: inline-block;
    padding: 0.3em;
    background-color: ${(props) => props.theme.bgColor};
    border: 1px solid #fff;
    border-radius: ${(props) => props.theme.smallGap};
  }
`;

function Reviews({ movie, id }) {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  // const [reviews, setReviews] = useState([]);

  // const getMediaReviews = useCallback(async () => {
  //   const json = await fetchMediaReviews(movie, id);
  //   setReviews(json.results);
  // }, [id, movie]);

  // useEffect(() => {
  //   getMediaReviews();
  // }, [getMediaReviews]);

  const { data: reviews } = useQuery(["reviews", id], () =>
    fetchMediaReviews(movie, id),
  );

  return (
    <>
      <ReviewIndicator>Reviews</ReviewIndicator>
      <ReviewContainer>
        {reviews?.results.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.author_details?.avatar_pathd} alt={item.author} />
              <ReviewUsername>*{item.author_details.username}</ReviewUsername>
              <ReviewContent>
                {item.content.slice(0, 200)}...{" "}
                <a href={item.url} target={`_blank`}>
                  all comments
                </a>
              </ReviewContent>
              <span style={{ fontStyle: "oblique", fontSize: "0.5em" }}>
                {item.author_details.rating?.toFixed(1)}
              </span>
              <p style={{ fontStyle: "oblique", fontSize: "0.5em" }}>
                last update : {item.updated_at}
              </p>
            </li>
          );
        })}
        <ReviewList todos={todos} setTodos={setTodos} />
      </ReviewContainer>
      <ReviewTextarea
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
    </>
  );
}

export default Reviews;
