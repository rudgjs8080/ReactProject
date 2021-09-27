import React from "react";

function AddressView(props) {
  const { list } = props;
  // console.log("view", list);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전화번호</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{list.name}</td>
            <td>{list.address}</td>
            <td>{list.number}</td>
            <td>{list.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddressView;
