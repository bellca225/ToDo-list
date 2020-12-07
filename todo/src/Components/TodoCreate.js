import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background: #5c7cfa;
  &:hover {
    background: #bac8ff;
  }
  &:active {
    background: #3b5bdb;
  }

  z-index: 5;
  cursor: pointer;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(0, 50%); // 정확한 버튼의 위치를 찾도록 함

  font-size: 60px;
  color: #fff;
  border-radius: 50%;

  border: none;
  outline: none;

  transition: 0.125s all ease-in; // 애니메이션 효과

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787; // 연한 빨간 색
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(0%, 50%) rotate(45deg); // 기존의 값 + 45도 돌려주기
    `}
`;

const InsertFormPositioner = styled.div`
  // 특정 폼 위치 정해주기
  width: 100%;
`;

const InsertForm = styled.div`
  //  실제 폼

  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px; //모서리 삐져나오지 않게 처리
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  display: flex;
  margin-bottom: -80px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box; // padding이 삐져나오지 않게 함
`;

function TodoCreate() {
  const [open, SetOpen] = useState(false);
  const onToggle = () => SetOpen(!open); // 기존 open의 값을 반전시켜주는 기능

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder="할 일을 입력 후, Enter를 누르세요" autoFocus />
          </InsertForm>
        </InsertFormPositioner>
      )}
      {/* 만약 open 상태라면 InsertForm을 보여주어라 */}
      <CircleButton onClick={onToggle} open={open}>
        {/* open이 있으면 다른 스타일을 보여주도록 설정해야  함 */}
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
