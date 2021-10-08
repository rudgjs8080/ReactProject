import React from "react";
import AppContextProvider from "../context/AppContextProvider";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
function TodoMain() {
  return (
    <AppContextProvider>
      <div className="todo_main_layout">
        <TodoInput />
        <TodoList />
      </div>
    </AppContextProvider>
  );
}

export default TodoMain;
