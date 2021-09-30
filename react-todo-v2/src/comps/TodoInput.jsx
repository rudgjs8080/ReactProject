import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
function TodoInput() {
  const { todo, setTodo, todoList, setTodoList, todoInsert, onChangeHandler } =
    useTodoContext();

  return (
    <div className="input_box">
      <input name="t_text" onChange={onChangeHandler} />
      <button onClick={todoInsert}>추가</button>
    </div>
  );
}

export default TodoInput;
