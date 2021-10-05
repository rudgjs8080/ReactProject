import React, { useState } from "react";
import "../css/JoinForm.css";

function JoinForm() {
  const [join, setJoin] = useState({
    userid: "",
    password: "",
    password_2: "",
    e_mail: "",
  });
  const onChangeJoin = (e) => {
    setJoin({ ...join, [e.target.name]: e.target.value });
  };
  const onClickJoin = (e) => {
    if (!join.userid) {
      alert("ID를 입력해주세요");
      return;
    }
    if (!join.password) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (!join.password_2 || join.password !== join.password_2) {
      alert(
        "비밀번호를 한 번더 입력해주시거나 입력하신 비밀번호를 다시 확인해주세요"
      );
      return;
    }
    if (!join.e_mail) {
      alert("e_mail을 입력해주세요");
      return;
    }
  };
  return (
    <div className="join_box">
      <input
        name="userid"
        placeholder="아이디를 입력해주세요"
        onChange={onChangeJoin}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeJoin}
      />
      <input
        name="password_2"
        type="password"
        placeholder="비밀번호를 한 번 더 입력해주세요"
        onChangeJoin={onChangeJoin}
      />
      <input
        name="e_mail"
        placeholder="E-mail을 입력해주세요"
        onChange={onChangeJoin}
      />
      <button onClick={onClickJoin}>회원가입</button>
    </div>
  );
}

export default JoinForm;
