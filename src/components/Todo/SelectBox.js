import React from 'react';

function SelectBox({ value, setValue, options }) {
  return (
    <select
      // 받은 props를 설정해 값 넘겨주도록 설정
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value="" disabled>
        카테고리 선택
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
export default SelectBox;
