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
  // 남은 할일 목록 보여주기
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const DayString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <TodoHeadBlock>
      <h1>{DayString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
