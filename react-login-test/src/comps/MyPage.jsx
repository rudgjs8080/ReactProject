import React from "react";
import "../css/Home_MyPageForm.css";
import { useUserContext } from "../context/UserContextProvider";

function MyPage() {
  const { user } = useUserContext();
  return (
    <div>
      <div className="mainPage_title">{user.userid}님 반갑습니다</div>
    </div>
  );
}

export default MyPage;
