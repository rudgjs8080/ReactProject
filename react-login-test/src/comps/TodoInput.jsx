import React from "react";
import "../css/TodoInput.css";
import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { todo, onChangeTodo, onClickInsert, onKeyPress } = useTodoContext();

  return (
    <div className="form">
      <input
        onChange={onChangeTodo}
        value={todo.t_text}
        onKeyPress={onKeyPress}
      />
      <div className="btn_insert" onClick={onClickInsert}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
