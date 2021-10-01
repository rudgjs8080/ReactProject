import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";
function TodoList() {
  const { todo, todoList } = useTodoContext();
  const listView = todoList.map((item) => {
    return <TodoItem todo={item} key={todo.t_id} />;
  });
  return <div className="list_box">{listView}</div>;
}

export default TodoList;
