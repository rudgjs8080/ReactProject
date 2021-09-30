import React, { useContext } from "react";
import "../css/MainNav_1.css";
import BookContext from "../context/BookContext";
import UUID from "react-uuid";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useContext(BookContext);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  // 입력된 도서정보를 배열에 추가하기
  const bookInsert = async () => {
    await setBook({ ...book, b_id: UUID() });
    await setBookList([...bookList, book]);
  };
  return (
    <div className="main_input">
      <label>
        도서명
        <input name="b_name" value={book.b_name} onChange={onChangeHandler} />
      </label>
      <label>
        장르
        <input name="b_genre" value={book.b_genre} onChange={onChangeHandler} />
      </label>
      <button onClick={bookInsert}>리스트 추가</button>
    </div>
  );
}

export default BookInput;
