import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState({
    a_id: "",
    a_name: "",
    a_address: "",
    a_number: "",
    a_age: 0,
  });
  const [a_list, setA_list] = useState([]);

  const args = { address, setAddress, a_list, setA_list };
  return (
    <div className="App">
      <header className="App-header">
        <h1>UI/UX 과제물</h1>
      </header>
      <AddressInput args={args} />
      <AddressView a_list={a_list} />
    </div>
  );
}

export default App;
