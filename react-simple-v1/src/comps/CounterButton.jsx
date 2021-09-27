import React from "react";

function CounterButton(props) {
  return (
    <div>
      <button onClick={props.plus}>증가</button>
      <button onClick={props.minus}>감소</button>
    </div>
  );
}

export default CounterButton;
