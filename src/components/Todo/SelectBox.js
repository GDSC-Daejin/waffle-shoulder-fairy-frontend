import React from 'react';

function SelectBox({ value, setValue, options }) {
  //selectBox onChange 함수
  const onChangeSelectBox = (e) => {
    setValue(e.target.value);
  };
  return (
    <select
      // 받은 props를 설정해 값 넘겨주도록 설정
      value={value}
      onChange={onChangeSelectBox}
    >
      <option value="" disabled>
        카테고리 선택
      </option>
      {options.map((item) => (
        //categoryId값이 value가 되도록 설정: value={item.value}
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
export default SelectBox;
