import React, { useContext } from "react";
import "../css/MainNav_1.css";
import BookContext from "../context/BookContext";
function BookList() {
  const list_title_names = [
    { id: 0, t_name: "ID" },
    { id: 1, t_name: "도서명" },
    { id: 2, t_name: "장르" },
    { id: 3, t_name: "저자" },
  ];
  const list_title_view = list_title_names.map((title) => {
    return <th key={title.id}>{title.t_name}</th>;
  });
  const { bookList } = useContext(BookContext);
  // map을 사용하여 배열을 기준으로 컴포넌트 리스트 만들기
  const viewList = bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{book.b_id}</td>
        <td colSpan="4">{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });
  return (
    <table class="main_list">
      <thead>
        <tr>{list_title_view}</tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default BookList;
