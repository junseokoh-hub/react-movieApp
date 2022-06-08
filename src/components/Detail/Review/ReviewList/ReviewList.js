import React from "react";
import ReviewContent from "../ReviewContent";

function ReviewList({ todos, setTodos }) {
  return (
    <li>
      {todos.map((todo) => {
        return (
          <ReviewContent
            key={todo.id}
            text={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </li>
  );
}

export default ReviewList;
