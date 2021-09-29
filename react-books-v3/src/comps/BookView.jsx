import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookView() {
  const { book, setBook } = useContext(BookContext);
  return (
    <div className="main_view">
      <div>도서명 : {book.b_name}</div>
      <div>장르 : {book.b_genre}</div>
    </div>
  );
}

export default BookView;
