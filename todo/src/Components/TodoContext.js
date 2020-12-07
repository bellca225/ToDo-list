import React, { useReducer, createContext } from "react";

const initTodo = [
  {
    id: 1,
    text: "프로잭트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "프로잭트 생성하기",
    done: true,
  },
  {
    id: 3,
    text: "프로잭트 생성하기",
    done: true,
  },
  {
    id: 4,
    text: "프로잭트 생성하기",
    done: true,
  },
];

/*Create Toggle Remove*/
function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

const TodoStateContenxt = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initTodo);
  return (
    <TodoStateContenxt.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContenxt.Provider>
  );
}
