import "../css/TodoInput.css";
import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { todo, onChange, onClick, onKeyPress } = useTodoContext();
  return (
    <div className="form">
      <input onChange={onChange} value={todo.t_text} onKeyPress={onKeyPress} />
      <div className="btn_insert" onClick={onClick}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
