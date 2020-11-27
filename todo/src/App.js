import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#f8f9fa;
  }
`;

function App() {
  return (
    <>
      <TodoTemplate>Hi</TodoTemplate>
      <GlobalStyle />
      <div className="day">일요일</div>
    </>
  );
}

export default App;
