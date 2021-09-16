import React, { useState } from "react";
import RenderSquare from "./modules/RenderSquare";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const changeText = (id) => {
    const _squares = [...squares];
    _squares[id] = _squares[id] === "O" ? "X" : "O";
    setSquares(_squares);
  };

  return (
    <div className="tictac">
      <h3>다음 플레이어 : 0 </h3>
      <RenderSquare squares={squares} changeText={changeText} />
    </div>
  );
}

export default Board;
