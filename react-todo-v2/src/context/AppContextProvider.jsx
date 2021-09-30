import { createContext, useContext, useState } from "react";
import { useRef } from "react";
const AppContext = createContext();

export const useTodoContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const nextId = useRef(0);
  const nextText = useRef();
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "test",
    t_isComplete: false,
  });
  const [todoList, setTodoList] = useState([
    {
      t_id: 0,
      t_text: "",
      t_isComplete: false,
    },
  ]);
  const onChangeHandler = (e) => {
    // todoList 가장 마지막 요소의 t_id 값을 추출하여 +1 한 후 현재 id 값에 넣기
    setTodoList({
      ...todo,
      t_id: todoList[todoList.length - 1].t_id + 1,
      t_text: e.target.value,
      t_isComplete: false,
    });
    // console.log(todoList);
  };
  const todoInsert = (text) => {
    setTodoList({ ...todoList, t_id: nextId.current });
  };
  const completeToggle = (id) => {};
  const todoDelete = (id) => {};

  const providerData = {
    todoList,
    setTodoList,
    todoInsert,
    completeToggle,
    todoDelete,
    onChangeHandler,
  };
  return (
    <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
