import React from "react";

function AddressInput(props) {
  const { list, setList } = props;
  const onClick_insert = (e) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  };
  return (
    <div className="input_box">
      <input name="name" placeholder="이름을 입력해주세요" />
      <input name="address" placeholder="주소를 입력해주세요" />
      <input name="number" placeholder="전화번호를 입력해주세요" />
      <input name="age" placeholder="나이를 입력해주세요" />
      <button onClick={onClick_insert}>추가</button>
    </div>
  );
}

export default AddressInput;
