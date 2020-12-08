import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #dedede;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #555;
  }
  .day {
    margin-top: 3px;
    color: #aaa;
    // opnecolor에서 가져온 정보
    font-size: 21px;
  }
  .tasks-left {
    color: #5c7cfa;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <TodoHeadBlock>
      <h1>2020년 11월 27일</h1>
      <div className="day">일요일</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
