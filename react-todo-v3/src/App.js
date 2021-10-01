import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";

function App() {
  /**
   * TODOMain.jsx Layout을 사용하여
   */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoMain header="오늘 할 일 " form={<TodoInput />}>
        <TodoList />
      </TodoMain>
    </div>
  );
}

export default App;
