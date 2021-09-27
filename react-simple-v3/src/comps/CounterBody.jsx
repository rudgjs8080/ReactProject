import React, { useState } from "react";
import CounterInput from "./CounterInput";
import CounterView from "./CounterView";

function CounterBody() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <CounterInput setNumber={setNumber} />
      <CounterView number={number} />
    </div>
  );
}

export default CounterBody;
