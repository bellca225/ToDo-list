import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ecd4da;
  font-size: 24px; //아이콘 사이즈
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${(props) =>
    props.done && //done.props가 들어오면 css로 색이 바뀜
    css`
      border: 1px solid #5c7cfa;
      color: #5c7cfa;
    `}
`;
const Text = styled.div`
  flex: 1px;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done && //done.props가 들어오면 css로 색이 바뀜
    css`
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  &:hover {
    ${Remove} {
      //특정 상황에만 Remove를 넣어주고 싶을 때
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  return (
    <>
      <TodoItemBlock>
        <CheckCircle done={done}>{done && <MdDone></MdDone>}</CheckCircle>

        <Text done={done}>{text}</Text>
        <Remove>
          <MdDelete />
        </Remove>
      </TodoItemBlock>
    </>
  );
}

export default TodoItem;
