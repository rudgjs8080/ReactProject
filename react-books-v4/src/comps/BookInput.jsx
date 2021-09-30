import React, { useRef } from "react";
import "../css/MainNav_1.css";
import { useBookContext } from "../context/AppContextProvider";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useBookContext();
  /**
   * react에서 일반적으로 선언된 변수는
   * 		let nextId = 0
   * 실제 화면전체가 변경되지 않더라도
   * 	화면전체가 변경 : refresh
   * 	react는 화면을 refresh 하지 않고 rendering 한다
   * 	데이터(state)가 변경 되었을 때만 reRendering 된다
   * 변수는 무조건 초기화 되어 버린다
   *
   * 초기화 되는 것을 방지하면서 현재 화면에서
   * 어떤 변수(public 변수)의 값을 유지하고 싶을 때가 있다
   * 그럴때 reference 변수로 선언을 해줘야 한다
   * 1. 화면이 refresh 되지 않는 상태에서 어떤 변수를 보관하고 싶을 때
   * const 변수명 useRef(초기값)
   *
   * 2.(주로) input box와 같은 특정 tag 요소를 일반적인 HTML의 JS처럼
   * 	핸들링 하고 싶을 때
   * 	Ref 변수를 선언하고
   * 	컴포넌트 요소에 ref 속성에 해당 변수를 설정해 둔다
   * 	이때는 매개변수가 없거나 null로 설정해야 한다
   *
   * const 변수명 = useRef()
   * 또는
   * const 변수명 = useRef(null)
   * 사용할 때는
   * <input ref={변수명} /> 처럼 지정해둔다
   *
   * 코드에서 핸들링 할 때는
   * 변수명.current.어떤함수() 처럼 핸들링 한다
   *
   * 단, tag 요소를 핸들링 하는 코드는 가급적 사용하지 말라
   * 	useRef()로 핸들링 해야 하는 것들 중
   * 	대부분 state를 핸들링 하므로서 구현이 가능한 경우가 많다
   */
  let nextId = useRef(0);
  let nameId = useRef();
  let genreId = useRef();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value, b_id: nextId.current });
  };
  // 입력된 도서정보를 배열에 추가하기
  const bookInsert = async () => {
    if (book.b_name === "") {
      alert("도서명을 입력하세요");
      nameId.current.focus();
      return;
    }
    if (book.b_genre === "") {
      alert("장르를 입력하세요");
      genreId.current.focus();
      return;
    }
    // await setBook({ ...book, b_id: UUID() });
    await setBookList([...bookList, book]);

    // Ref로 선언된 변수의 current 요소를 1 증가하여
    // 다음번 list의 id로 사용한다
    nextId.current++;
    /**
     * 리스트에 추가한 후 book state 를 초기화 하여
     * 입력창에 입력된 내용을 삭제하기
     * 이 기능을 사용하려면
     * 반드시 input box value 를 사용해야 한다
     * <input value={state}/>
     *
     * <input defaultValue={state} />를 사용하면
     * 기능이 효과 없음
     */
    await setBook({ b_id: "", b_name: "", b_genre: "" });
  };
  return (
    <div className="main_input">
      <label>
        도서명
        <input
          name="b_name"
          ref={nameId}
          value={book.b_name}
          onChange={onChangeHandler}
        />
      </label>
      <label>
        장르
        <input
          name="b_genre"
          ref={genreId}
          value={book.b_genre}
          onChange={onChangeHandler}
        />
      </label>
      <button onClick={bookInsert}>리스트 추가</button>
    </div>
  );
}

export default BookInput;
