import React from "react";
import styled from "styled-components";

const Username = styled.span`
  color: ${(props) => props.theme.darkBlueColor};
  font-size: calc(${(props) => props.theme.smallGap}*3);
  font-weight: 900;
  padding-left: ${(props) => props.theme.smallGap};
`;

const DeleteButton = styled.button``;

function ReviewContent({ writer, text, todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  return (
    <div style={{ marginBottom: "1em" }}>
      <div>
        <Username>*{writer}</Username>
        <p>{text}</p>
      </div>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </div>
  );
}

export default ReviewContent;
