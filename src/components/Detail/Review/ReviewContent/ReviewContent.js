import React, { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../../../../Context/LoginContext";

const Username = styled.span`
  color: ${(props) => props.theme.darkBlueColor};
  font-size: calc(${(props) => props.theme.smallGap}*3);
  font-weight: 900;
  padding-left: ${(props) => props.theme.smallGap};
`;

const DeleteButton = styled.button``;

function ReviewContent({ writer, text, todo, todos, setTodos }) {
  const { login } = useContext(LoginContext);

  const handleDelete = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  console.log("why i'm rendered?");
  return (
    <div style={{ marginBottom: "1em" }}>
      <div>
        <Username>*{writer}</Username>
        <p>{text}</p>
      </div>
      {login && <DeleteButton onClick={handleDelete}>Delete</DeleteButton>}
    </div>
  );
}

export default ReviewContent;
