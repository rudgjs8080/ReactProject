import React from "react";

function AddressInput(props) {
  const { address, setAddress, a_list, setA_list } = props.args;

  const changeText = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    // console.log(address);
  };

  const onClick_insert = () => {
    setA_list([...a_list, address]);
  };
  return (
    <div className="input_box">
      <input
        name="a_name"
        placeholder="이름을 입력해주세요"
        onChange={changeText}
      />
      <input
        name="a_address"
        placeholder="주소를 입력해주세요"
        onChange={changeText}
      />
      <input
        name="a_number"
        placeholder="전화번호를 입력해주세요"
        onChange={changeText}
      />
      <input
        name="a_age"
        placeholder="나이를 입력해주세요"
        onChange={changeText}
      />
      <button onClick={onClick_insert}>추가</button>
    </div>
  );
}

export default AddressInput;
