import React, { useEffect, useState, useCallback } from "react";
import "../css/BBs.css";
import { firestore } from "../config/BBSConfig";
import { useHistory, useRouteMatch } from "react-router-dom";

function BBsDetail() {
  const history = useHistory();
  const match = useRouteMatch();
  const docId = match.params.id;

  const [bbs, setBBs] = useState({
    b_date: "",
    b_time: "",
    b_writer: "",
    b_subject: "",
    b_content: "",
  });

  const findByidFetch = useCallback(async () => {
    if (docId) {
      const result = await firestore.collection("bbs").doc(docId).get();
      if (result) {
        setBBs(result.data());
      }
    }
  }, [docId]);
  useEffect(findByidFetch, [findByidFetch]);

  const onDelete = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      alert(docId);
      firestore
        .collection("bbs")
        .doc(docId)
        .delete()
        .then((result) => {
          history.push("/");
        });
    }
  };

  return (
    <>
      <section className="d_section">
        <div className="d_title1">
          <div>작성일자</div>
          <div>작성시간</div>
          <div>글쓴이</div>
          <div>제목</div>
          <div>내용</div>
        </div>
        <div className="d_title2">
          <div>{bbs.b_date}</div>
          <div>{bbs.b_time}</div>
          <div>{bbs.b_writer}</div>
          <div>{bbs.b_subject}</div>
          <div>{bbs.b_content}</div>
        </div>
      </section>
      <div className="bbs_btn_box">
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          HOME
        </button>
        <button
          onClick={() => {
            history.push(`/write/${docId}`);
          }}
        >
          수정
        </button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </>
  );
}

export default BBsDetail;
