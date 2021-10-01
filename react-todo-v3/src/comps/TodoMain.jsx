import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import AppContextProvider from "../context/AppContextProvider";

function TodoMain({ header, form, children }) {
  return (
    <AppContextProvider>
      <div className="main_box">
        <div className="main_header">{header}</div>
        <section>{form}</section>
        <section>{children}</section>
      </div>
    </AppContextProvider>
  );
}

export default TodoMain;
