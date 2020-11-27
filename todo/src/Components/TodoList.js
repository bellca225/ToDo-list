import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1; // 자신이 차지할 수 있는 모든 영역을 차지함
  padding: 20px 32px;
  badding-bottom: 48px;
  overflow-y: auto;
  background: #aaa;
`;

function TodoList() {
  return <TodoListBlock>TodoList</TodoListBlock>;
}

export default TodoList;
