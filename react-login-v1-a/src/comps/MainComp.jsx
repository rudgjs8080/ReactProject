import React from "react";
import MainNav from "./MainNav";
import LoginForm from "./LoginForm";
import { Route } from "react-router";
import JoinForm from "./JoinForm";
import NoticeForm from "./NoticeForm";
import ListForm from "./ListForm";
import { useUserContext } from "../context/UserContextProvider";
import LogoutForm from "./LogoutForm";

function MainComp() {
  const { join, setJoin } = useUserContext();
  const navList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "공지사항", link: "/notice" },
    { id: 2, title: "자유게시판", link: "/bbs" },
    join?.userid
      ? { id: 3, title: "로그아웃", link: "/logout", align: true }
      : { id: 3, title: "로그인", link: "/login", align: true },
    join?.userid
      ? { id: 4, title: "마이페이지", link: "/mypage" }
      : { id: 4, title: "회원가입", link: "/join" },
  ];
  return (
    <MainNav navList={navList}>
      <Route path="/" exact>
        HOME
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join" exact>
        <JoinForm />
      </Route>
      <Route path="/notice" exact>
        <NoticeForm />
      </Route>
      <Route path="/bbs" exact>
        <ListForm />
      </Route>
      <Route path="/logout" exact>
        <LogoutForm />
      </Route>
    </MainNav>
  );
}

export default MainComp;
