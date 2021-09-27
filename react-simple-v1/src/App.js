import "./App.css";
import CounterView from "./comps/CounterView";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const args = {
    count: count,
    plus: plus,
    minus: minus,
  };
  return (
    <div className="App">
      <header className="App-header">
        <CounterView args={args} />
      </header>
    </div>
  );
}

export default App;
