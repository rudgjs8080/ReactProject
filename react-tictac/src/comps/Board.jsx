import React, { useState } from "react";
import { RenderSquare, calcWinner } from "./modules/RenderSquare";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [OnX, setOnX] = useState(true);

  if (calcWinner(squares)) {
    alert("승자는 : " + calcWinner(squares));
  }

  const changeText = (id) => {
    // 이미 승부가 났으면 끝
    const _squares = [...squares];
    if (squares[id]) {
      _squares[id] = _squares[id] === "O" ? "X" : "O";
      setOnX(!OnX);
      setSquares(_squares);
    } else {
      _squares[id] = OnX === true ? "O" : "X";
      setOnX(!OnX);
      setSquares(_squares);
    }
  };
  const player = OnX ? "O" : "X";
  return (
    <div className="tictac">
      <h3>다음 플레이어 : {player} </h3>
      <RenderSquare squares={squares} changeText={changeText} OnX={OnX} />
    </div>
  );
}

export default Board;
