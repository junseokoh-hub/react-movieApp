import React from "react";
import styled from "styled-components";

const ReviewContainer = styled.ul`
  width: 30em;
  height: 12em;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ReviewUsername = styled.span`
  color: #40739e;
  font-size: calc(${(props) => props.theme.smallGap}*3);
  font-weight: 900;
  padding-left: ${(props) => props.theme.smallGap};
`;

const ReviewContent = styled.p`
  margin-bottom: calc(${(props) => props.theme.smallGap}*2);
`;

function Reviews({ reviews }) {
  return (
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
    </ReviewContainer>
  );
}

export default Reviews;
