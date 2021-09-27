import "./App.css";
import CounterView from "./comps/CounterView";
import CounterInput from "./comps/CounterInput";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const changeNumber = (e) => {
    const _number = e.target.value;
    setNumber(_number);
  };
  return (
    <div className="App">
      <header className="App-header">
        <CounterInput changeNumber={changeNumber} />
        <CounterView number={number} />
      </header>
    </div>
  );
}

export default App;
