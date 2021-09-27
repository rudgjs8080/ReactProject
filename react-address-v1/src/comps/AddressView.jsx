import React from "react";

function AddressView(props) {
  const { list } = props;
  // console.log("view", list);
  return (
    <div>
      <div>이름 : {list.name}</div>
      <div>주소 : {list.address}</div>
      <div>전화번호 : {list.number}</div>
      <div>나이 : {list.age}</div>
    </div>
  );
}

export default AddressView;
