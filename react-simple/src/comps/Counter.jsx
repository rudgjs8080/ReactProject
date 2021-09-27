import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const clickPlus = () => {
    setCount(count + 1);
  };
  const clickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>카운트 : {count}</div>
      <button onClick={clickPlus}>증가</button>
      <button onClick={clickMinus}>감소</button>
    </div>
  );
}

export default Counter;
