import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px 32px 24px 32px;
  border-bottom: 1px solid #777;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #555;
  }
  .day {
    margin-top: 3px;
    color: #555;
    // opnecolor에서 가져온 정보
    font-size: 21px;
  }
  .task-left {
    color: #4c6ef5;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2020년 11월 27일</h1>
    </TodoHeadBlock>
  );
}

export default TodoHead;
