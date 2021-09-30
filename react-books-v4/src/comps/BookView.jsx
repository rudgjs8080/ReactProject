import { useBookContext } from "../context/AppContextProvider";

function BookView() {
  const { book } = useBookContext;
  return (
    <div className="main_view">
      <div>ID : {book.b_id}</div>
      <div>도서명 : {book.b_name}</div>
      <div>장르 : {book.b_genre}</div>
    </div>
  );
}

export default BookView;
