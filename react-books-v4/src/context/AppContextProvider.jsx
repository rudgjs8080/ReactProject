import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
/**
 * Hook 함수
 * react에서 state rendering 등을 관리하기 위한 함수들
 * use로 시작되는 함수들
 * useState, useEffect(), useCallback
 *
 * react가 초기에는 class 방식으로 코딩을 했다
 * class방식은 기존의 JS코드와 문법적인 면들이 많이 달라서
 * 함수 방식을 도입했다
 */
// user Hook
// react에서 기본적으로 제공하는 hook()
export const useBookContext = () => {
  return useContext(AppContext);
};
/**
 * 합성패턴을 사용하여 Context를 Upgrade 하기
 * 1. State를 생성하고 관리(setState)할 컴포넌트의 주요코드를
 * 		이곳으로 이동
 * 2. createContext()를 사용하여 Context를 하나 생성
 * 3. <Context.Provider>로 시작되는 컴포넌트 코드로 변경
 * 4. 컴포넌트 함수의 매개변수에 {children} 을 추가
 * 5. 컴포넌트 body에 {children} 를 포함한다
 */
function AppContextProvider({ children }) {
  const [book, setBook] = useState({
    b_id: 0,
    b_name: "",
    b_genre: "",
  });
  const [bookList, setBookList] = useState([]);

  const providerData = { book, setBook, bookList, setBookList };

  return (
    <>
      <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
