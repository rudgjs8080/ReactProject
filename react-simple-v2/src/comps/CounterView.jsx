import React from "react";

function CounterView(props) {
  const number = props.number;
  let _number = Number(number);
  return (
    <div>
      <div>
        {number}와 20의 합 : {_number + 20}
      </div>
      <div>
        {number}와 {number}의 곱 : {_number * _number}
      </div>
    </div>
  );
}

export default CounterView;
