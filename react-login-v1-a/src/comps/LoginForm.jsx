import React, { useState } from "react";
import "../css/LoginForm.css";
import { useUserContext } from "../context/UserContextProvider";

function LoginForm() {
  const { setJoin } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });
  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  const onLogin = async (e) => {
    if (!account.userid) {
      alert("ID를 입력해주세요");
      return;
    }
    if (!account.password) {
      alert("password를 입력해주세요");
      return;
    }
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });

    // 서버로부터 정상적인 응답이 오면
    // 실제 서버가 멈춰있는 상태일 경우 res 자체가 undefined 또는 null 값이다
    // if(res) {} 연산을 하면 res가 정상인지 확인할 수 있다
    // res가 정상이 아닐때는 res.ok 에서 오류가 발생한다
    // ES6+ 버전에서 safe null 검사를 수행하는 코드가 있다
    // if(res?.ok) -> res가 정상(null, undefined 가 아니면 .ok 속성을 검사하라)
    // null로 인한 오류를 방지하는 코드
    if (res?.ok) {
      const resultUser = await res.json();

      //const user = users.find((item) => {
      //  return item.userid === account.userid;
      //});
      console.log("user", resultUser);
      if (!resultUser?.userid) {
        alert("존재하지 않는 ID 입니다");
        return;
      }
      if (resultUser.password !== account.password) {
        console.log(`user: ${resultUser.password} acc: ${account.password}`);
        alert("비번 오류");
        return;
      }
      alert("로그인 성공");
      setJoin(resultUser);
    }
  };
  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="아이디를 입력하세요"
        onChange={onChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={onChange}
      />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginForm;
