import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./Components/TodoCreate";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";

import TodoTemplate from "./Components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background:#f8f9fa;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
