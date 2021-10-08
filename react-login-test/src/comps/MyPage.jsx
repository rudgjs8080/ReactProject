import React from "react";
import { useUserContext } from "../context/UserContextProvider";

function MyPage() {
  const { user } = useUserContext();
  return (
    <div>
      <div>{user.userid}님 반갑습니다</div>
    </div>
  );
}

export default MyPage;
