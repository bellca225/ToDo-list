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
  const state = useTodoState;
  console.log(state);
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={false} />
      <TodoItem text="프로젝트 생성하기" done={false} />
      <TodoItem text="프로젝트 생성하기" done={false} />
      <TodoItem text="프로젝트 생성하기" done={true} />
    </TodoListBlock>
  );
}

export default TodoList;
