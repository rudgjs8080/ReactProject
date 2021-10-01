import React from "react";
import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { onChangeHandler, onClickHandler, todo } = useTodoContext();
  return (
    <div className="input_box">
      <input onChange={onChangeHandler} />
      <button onClick={onClickHandler}>추가</button>
      <p>{todo.t_text}</p>
    </div>
  );
}

export default TodoInput;
