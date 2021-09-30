import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import AppContextProvider from "../context/AppContextProvider";

function TodoMain() {
  return (
    <AppContextProvider>
      <div className="main_box">
        <div className="main_header">
          <h1>오늘 할 일</h1>
        </div>
        <TodoInput />
        <TodoList />
      </div>
    </AppContextProvider>
  );
}

export default TodoMain;
