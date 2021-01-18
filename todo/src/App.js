import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./Components/TodoCreate";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./Components/TodoContext";

import TodoTemplate from "./Components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background:#f8f9fa;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />

        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>

      
    </>
  );
}

export default App;
