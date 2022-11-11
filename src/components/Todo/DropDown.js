import React, { useState } from 'react';
function DropDown() {
  const [selects, setSelects] = useState();
  return (
    <div>
      {/*<h1>{selects}</h1>*/}
      <select value={selects} onChange={e => setSelects(e.target.value)}>
        <option>동아리</option>
        <option>학교</option>
      </select>
    </div>
  );
}
export default DropDown;