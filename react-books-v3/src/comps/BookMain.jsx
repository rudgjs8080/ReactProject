import React, { useState } from "react";
import { Route } from "react-router";
import BookInput from "./BookInput";
import BookView from "./BookView";
import BookList from "./BookList";
import BookContext from "../context/BookContext";
import UUID from "react-uuid";
/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
 * NavLink를 클릭했을 때 선택적으로 화면을 보여주기
 */
function BookMain() {
  const [book, setBook] = useState({
    b_id: UUID(),
    b_name: "목요일",
    b_genre: "내일 금요일",
  });
  const [bookList, setBookList] = useState([]);
  const providerData = { book, setBook, bookList, setBookList };
  return (
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          여기는 홈화면
        </Route>
        <Route path="/insert" exact>
          <BookInput />
          <BookView />
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
