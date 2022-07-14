import React from "react";
import ReviewContent from "../ReviewContent";

function ReviewList({ todos, setTodos }) {
  return (
    <li>
      {todos.map((todo) => {
        return (
          <ReviewContent
            key={todo.id}
            writer={todo.writer}
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

export default React.memo(ReviewList);
