import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const onClick_insert = (e) => {};
  // console.log("app", list);
  return (
    <div className="App">
      <header className="App-header">
        <AddressInput list={list} setList={setList} />
        <AddressView list={list} />
      </header>
    </div>
  );
}

export default App;
