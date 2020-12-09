import React from "react";
import styled from "styled-components";
import { useTodoNextId, useTodoState } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1; // 자신이 차지할 수 있는 모든 영역을 차지함
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
  // background: grey;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
