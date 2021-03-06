import React, { useEffect } from "react";
import { useHistory } from "react-router";

function ListForm() {
  const { join, setJoin } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
      });
      const result = await res.json();
      console.log(result);
      await setJoin(result);
    };
    fetchData();
  }, []);
  if (!join.userid) {
    history.replace("/login");
  }
  return (
    <div>
      <h1>자유게시판</h1>
    </div>
  );
}

export default ListForm;
