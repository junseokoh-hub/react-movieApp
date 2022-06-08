import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button``;

function ReviewContent({ text, todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  return (
    <div>
      <div>{text}</div>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </div>
  );
}

export default ReviewContent;
