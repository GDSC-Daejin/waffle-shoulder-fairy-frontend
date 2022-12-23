import React from 'react';

function Buttons({ value, setValue, options }) {
  return (
    <div
      // 받은 props를 설정해 값 넘겨주도록 설정
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      {options.map((item) => (
        <button key={item.value} value={item.name}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
