import React from "react";
import "../css/JoinForm.css";
import { useUserContext } from "../context/UserContextProvider";

function JoinForm() {
  const { join, setJoin } = useUserContext();
  const onChangeJoin = (e) => {
    setJoin({ ...join, [e.target.name]: e.target.value });
    console.log(join);
  };

  const onClickJoin = async (e) => {
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
        "비밀번호를 한 번더 입력해주시거나 입력하신 비밀번호를 다시 확인해주세요",
        join.password,
        join.password_2
      );
      return;
    }
    if (!join.e_mail) {
      alert("e_mail을 입력해주세요");
      return;
    }
    const res = await fetch(
      "http://localhost:8080/users/join",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: join.userid,
          password: join.password,
          e_mail: join.e_mail,
        }),
      },
      console.log("res 완료")
    );
    if (res?.ok) {
      console.log("res2");
      const userData = await res.json();
      console.log(userData);
      if (!userData.userid || !userData.password || !userData.e_mail) {
        alert("입력하지 않은 값이 있습니다 다시 확인해주세요");
        return;
      }
      alert("회원가입 성공");
    }
  };
  return (
    <div className="join_box">
      <input
        name="userid"
        value={join.userid}
        placeholder="아이디를 입력해주세요"
        onChange={onChangeJoin}
      />
      <input
        name="password"
        value={join.password}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeJoin}
      />
      <input
        name="password_2"
        value={join.password_2}
        type="password"
        placeholder="비밀번호를 한 번 더 입력해주세요"
        onChange={onChangeJoin}
      />
      <input
        name="e_mail"
        value={join.e_mail}
        placeholder="E-mail을 입력해주세요"
        onChange={onChangeJoin}
      />
      <button onClick={onClickJoin}>회원가입</button>
    </div>
  );
}

export default JoinForm;
