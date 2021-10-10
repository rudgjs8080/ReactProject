// todoList data 및 event function 관련 Provider
import React, { createContext, useContext, useRef, useState } from "react";
const AppContext = createContext();

export const useTodoContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_comp: false,
  });

  const [todoList, setTodoList] = useState([]);

  // Referrence 변수선언
  const nextId = useRef(1);

  const onChangeTodo = (e) => {
    const t_text = e.target.value;
    setTodo({ ...todo, t_text: t_text, t_id: nextId.current });
    // console.log(todo);
  };

  const onClickInsert = () => {
    if (todo.t_text === null || todo.t_text === "") {
      alert("할 일을 반드시 입력해주세요");
      return;
    }
    setTodoList([...todoList, todo]);
    nextId.current++;
    todoReset();
  };
  const todoDelete = (e) => {
    if (window.confirm("Todo를 삭제하시겠습니까?")) {
      const t_id = Number(e.target.dataset.todoId);

      const _todoList = todoList.filter((todo) => todo.t_id !== t_id);
      setTodoList(_todoList);
    }
  };
  const todoReset = () => {
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickInsert();
    } else if (e.key === "Escape") {
      todoReset();
    }
  };

  const onCompClick = (e) => {
    const t_id = Number(e.target.dataset.todoId);
    const index = todoList.findIndex((todo) => todo.t_id === t_id);
    const selectTodo = todoList[index];
    const _todoList = [...todoList];
    _todoList[index] = {
      ...selectTodo,
      t_comp: !selectTodo.t_comp,
    };
    setTodoList(_todoList);
  };
  const propsStore = {
    todo,
    setTodo,
    todoList,
    setTodoList,
    onChangeTodo,
    onClickInsert,
    todoDelete,
    todoReset,
    onKeyPress,
    onCompClick,
  };
  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
}
export default AppContextProvider;
