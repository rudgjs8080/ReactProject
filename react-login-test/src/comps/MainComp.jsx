import React from "react";
import MainNav from "./MainNav";
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";
import Logout from "./Logout";
import TodoMain from "./TodoMain";
import { Route } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import MyPage from "./MyPage";
import HomeForm from "./HomeForm";

function MainComp() {
  const { user, setUser } = useUserContext();
  console.log(user);
  const NavList = [
    user?.userid
      ? { id: 0, title: "TODO", link: "/todo" }
      : { id: 0, title: "Home", link: "/" },
    user?.userid
      ? { id: 1, title: "로그아웃", link: "/logout", align: true }
      : { id: 1, title: "로그인", link: "/login", align: true },
    user?.userid
      ? { id: 2, title: "마이페이지", link: "/mypage" }
      : { id: 2, title: "회원가입", link: "/join" },
  ];

  return (
    <MainNav NavList={NavList}>
      <Route path="/" exact>
        <HomeForm />
      </Route>
      <Route path="/todo" exact>
        {user?.userid ? <TodoMain /> : <div>로그인을 해주세요</div>}
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join">
        <JoinForm />
      </Route>
      <Route path="/logout" exact>
        <Logout />
      </Route>
      <Route path="/mypage" exact>
        <MyPage />
      </Route>
    </MainNav>
  );
}

export default MainComp;
