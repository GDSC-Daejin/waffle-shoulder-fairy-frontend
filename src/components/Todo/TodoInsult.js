import React, { useState } from 'react';
import { AddBtn, Hr, MemoInput, TodoInput, TodoInputWrapper } from './styled';
import { todoState } from '../../store/todoState';
import SelectBox from './SelectBox';
import Buttons from '../Buttons/Buttons';

const categoryOptions = [
  { value: 1, name: '안녕' },
  { value: 2, name: '나는' },
  { value: 3, name: '유저' },
  { value: 4, name: '야' },
];

const TodoInsult = ({ onInsert }) => {
  const [inputs, setInputs] = useState({
    content: '',
    //TODO 카테고리 ID를 의미하는지 카테고리 텍스트를 의미하는건지 의미가 확실하지 않습니다.
    category: '',
  });

  const { addTodo } = todoState();

  const onChange = (e) => {
    //TODO e.target의 value는 selectBox에서의 name을 의미합니다.
    // 각 데이터 마다 onChange함수를 따로 만들어보세요
    const { value, name } = e.target;
    console.log(e.target);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const addTodoHandler = (e) => {
    //내용이 입력되었으면 TODO 추가
    console.log(12323);
    console.log(inputs);

    if (inputs.content) {
      //TODO 임시로 카테고리 아이디를 1로 설정해놓았습니다.
      // onchange가 변경된 후 수정해주세요.
      onInsert(inputs.content, '1');
      addTodo(inputs);
      setInputs({
        content: '',
        category: '',
      });
    } else {
      //내용이 없으면 알림
      alert('일정은 필수적으로 입력해주세요.');
    }
    e.preventDefault();
  };

  return (
    <TodoInputWrapper>
      <form>
        <Buttons
          value={inputs.category}
          setValue={(value) => {
            setInputs((state) => ({
              ...state,
              category: value,
            }));
          }}
          options={categoryOptions}
        />
        {/* 내용 작성 */}
        <TodoInput
          placeholder="추가할 일정"
          name="content"
          value={inputs.content}
          type={'text'}
          onChange={onChange}
        />
        {/* 추가 버튼 */}
        <AddBtn onClick={addTodoHandler} />
        <Hr />
        {/* 메모 작성 */}
        <MemoInput
          placeholder="카테고리"
          name="category"
          type={'text'}
          value={inputs.category}
          onChange={onChange}
          size={'0.8rem'}
          height={'2rem'}
        />
        <SelectBox
          value={inputs.category}
          setValue={(value) => {
            setInputs((state) => ({
              ...state,
              category: value,
            }));
          }}
          options={categoryOptions}
        />
        {/* 카테고리 버튼 */}
        {/*<TagBtn />*/}
      </form>
    </TodoInputWrapper>
  );
};

export default TodoInsult;
