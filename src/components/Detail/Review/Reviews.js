import React, { useState } from "react";
import styled from "styled-components";
import ReviewTextarea from "./ReviewTextarea";
import ReviewList from "./ReviewList";

const ReviewContainer = styled.ul`
  width: 80%;
  height: 12em;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0.5em;
  margin-bottom: ${(props) => props.theme.smallGap};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const ReviewUsername = styled.span`
  color: ${(props) => props.theme.darkBlueColor};
  font-size: calc(${(props) => props.theme.smallGap}*3);
  font-weight: 900;
  padding-left: ${(props) => props.theme.smallGap};
`;

const ReviewContent = styled.p`
  margin-bottom: calc(${(props) => props.theme.smallGap}*2);
`;

function Reviews({ reviews, login, savedUsername }) {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <ReviewContainer>
        {reviews.results &&
          reviews.results.map((item) => {
            return (
              <li key={item.id}>
                <ReviewUsername>*{item.author_details.username}</ReviewUsername>
                <ReviewContent>{item.content.slice(0, 200)}...</ReviewContent>
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
        login={login}
        savedUsername={savedUsername}
      />
    </>
  );
}

export default Reviews;
