import React, { useContext } from "react";
import "../css/MainNav_1.css";
import BookContext from "../context/BookContext";

function BookInput() {
  const { book, setBook } = useContext(BookContext);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
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
      <button>리스트 추가</button>
    </div>
  );
}

export default BookInput;
