import React from "react";
import CounterButton from "./CounterButton";

function CounterView(props) {
  const { count, plus, minus } = props.args;
  return (
    <div>
      카운트 : {count}
      <CounterButton plus={plus} minus={minus} />
    </div>
  );
}

export default CounterView;
