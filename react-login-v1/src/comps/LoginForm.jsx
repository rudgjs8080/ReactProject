import React from "react";
import "../css/LoginForm.css";
function LoginForm() {
  return (
    <div className="login_box">
      <input placeholder="아이디를 입력해주세요" />
      <input placeholder="비밀번호를 입력해주세요" />
      <button>로그인</button>
    </div>
  );
}

export default LoginForm;
