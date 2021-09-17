function RenderSquare({ squares, changeText }) {
  const onClick = (e) => {
    const id = e.target.dataset.id;
    const text = e.target.innerText;
    // alert(`id: ${id} text: ${text}`);
    changeText(id);
  };

  const arrayRow = [0, 0, 0];
  const arrayCol = [0, 0, 0];
  let index = 0;
  const board = arrayRow.map(() => {
    const cols = arrayCol.map(() => {
      // 한 라인의 buttom 만들기
      return (
        <button data-id={index} onClick={onClick}>
          {squares[index++]}
        </button>
      );
    });
    // 각 라인의 컴포넌트 만들기
    return <div>{cols}</div>;
  });
  return board;
}
/**
 * 0, 1, 2
 * 3, 4, 5
 * 6, 7, 8
 */
const calcWinnerFor = (squares) => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < win.length; i++) {
    const [x, y, z] = win[i];
    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      return squares[x];
    }
    return null;
  }
};
const calcWinner = (squares) => {
  // const 결과 = 원본.map()
  // 결과의 배열개수와 원본의 배열 개수는 항상 같다
  // 내용은 map의 return 결과에 따라서 달라진다

  // const 결과 = 원본.filter()
  // 결과의 배열개수 <= 원본보다 작거나 같다
  // filter()의 return이 true 일 때만 결과에 배열을 추가한다
  winList.filter((win) => {
    const [c_0, c_1, c_2] = win;
    return (
      squares[c_0] &&
      squares[c_0] === squares[c_1] &&
      squares[c_0] === squares[c_2]
    );
  });
};

export { RenderSquare, calcWinner };
