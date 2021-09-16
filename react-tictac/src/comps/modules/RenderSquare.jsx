function RenderSquare({ squares, changeText }) {
  const onClick = (e) => {
    const id = e.target.dataset.id;
    // const text = e.target.innerText;
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
export default RenderSquare;
