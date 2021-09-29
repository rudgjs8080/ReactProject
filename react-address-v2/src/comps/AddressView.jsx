import React from "react";

function AddressView({ a_list }) {
  // console.log("view", list);
  const listBody = a_list.map((address, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{address.a_name}</td>
        <td>{address.a_address}</td>
        <td>{address.a_number}</td>
        <td>{address.a_age}</td>
      </tr>
    );
  });
  return (
    <div className="main_view">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>주소</th>
            <th>전화번호</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>{listBody}</tbody>
      </table>
    </div>
  );
}

export default AddressView;
