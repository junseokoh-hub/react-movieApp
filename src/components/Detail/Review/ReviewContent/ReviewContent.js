import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button``;

function ReviewContent({ writer, text, todo, todos, setTodos }) {
  const handleDelete = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  return (
    <div style={{ marginBottom: "1em" }}>
      <div>
        <span>{writer}</span>
        <p>{text}</p>
      </div>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </div>
  );
}

export default ReviewContent;
