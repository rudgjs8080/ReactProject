import { Children, createContext, useContext, useState, useRef } from "react";

const AppContext = createContext();

export const useTodoContext = () => useContext(AppContext);

const AppContextProvider = ({ Children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_isComplete: false,
  });
  const [todoList, setTodoList] = useState([]);

  const nextId = useRef(0);

  const onChangeHandler = (e) => {
    const t_text = e.target.value;
    setTodo({ ...todo, t_text: t_text });
  };
  const onClickHandler = () => {};
  const providerData = {
    todo,
    setTodo,
    todoList,
    setTodoList,
    onChangeHandler,
    onClickHandler,
  };
  return (
    <AppContext.Provider value={providerData}>{Children}</AppContext.Provider>
  );
};
export default AppContextProvider;
