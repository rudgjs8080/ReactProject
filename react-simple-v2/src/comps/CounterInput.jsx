import React from "react";

function CounterInput({ changeNumber }) {
  return (
    <div>
      <input
        type="text"
        placeholder="숫자만 입력해주세요"
        onChange={changeNumber}
      />
    </div>
  );
}

export default CounterInput;
