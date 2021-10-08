import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import MainComp from "./comps/MainComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List Project</h1>{" "}
      </header>
      <UserContextProvider>
        <MainComp />
      </UserContextProvider>
    </div>
  );
}

export default App;
