import React from "react";

function CounterInput({ setNumber }) {
  const changeNumber = (e) => {
    const number = e.target.value;
    setNumber(number);
  };
  return (
    <div>
      <input placeholder="숫자를 입력하세요" onChange={changeNumber} />
    </div>
  );
}

export default CounterInput;
