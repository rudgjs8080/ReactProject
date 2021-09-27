import React from "react";

function AddressInput(props) {
  const { list, setList } = props;
  console.log(list);
  const changeText = (e) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  };
  return (
    <div className="input_box">
      <input
        name="name"
        placeholder="이름을 입력해주세요"
        onChange={changeText}
      />
      <input
        name="address"
        placeholder="주소를 입력해주세요"
        onChange={changeText}
      />
      <input
        name="number"
        placeholder="전화번호를 입력해주세요"
        onChange={changeText}
      />
      <input
        name="age"
        placeholder="나이를 입력해주세요"
        onChange={changeText}
      />
    </div>
  );
}

export default AddressInput;
