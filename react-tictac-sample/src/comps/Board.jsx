import React, { useState } from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill("A"));

  // squares 배열의 id 번째 요소의 값을 변경하려고 한다
  // 매개변수로 id를 받은것

  const changeText = (id) => {
    // squares[index] = "B" -> 사용하면 안된다
    // 이런식으로 중간에 요소 하나만 바꾸는 것은 불가능
    // 그렇기 때문에 원본 배열을 풀어서 유사배열을 만들어 유사배열을
    // 변경한 후 원본 배열에 다시 저장해주는 방법
    const _squares = [...squares];
    _squares[id] = "B";
    setSquares(_squares);
  };
  return (
    <div>
      <h3>다음 플레이어 : 0 </h3>
      <RenderSquare squares={squares} changeText={changeText} />
    </div>
  );
}

export default Board;
