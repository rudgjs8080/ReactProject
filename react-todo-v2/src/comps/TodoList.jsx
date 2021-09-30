import React from "react";
import { useTodoContext } from "../context/AppContextProvider";

function TodoList() {
  const { todoList, setTodoList } = useTodoContext();

  return (
    <div className="list_box">
      <h1>리스트</h1>
    </div>
  );
}

export default TodoList;
