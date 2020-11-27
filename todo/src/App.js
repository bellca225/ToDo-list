import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
    background-color:#ddd;
  }
`;

function App() {
  return (
    <>
      <TodoTemplate>Hi</TodoTemplate>
      <GlobalStyle />
    </>
  );
}

export default App;
