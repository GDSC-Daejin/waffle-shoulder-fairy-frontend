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
  });
  const [categoryIdSelected, setCategoryIdSelected] = useState({
    categoryId: '',
  });

  const { addTodo } = todoState();
  //Todo 내용 input onChange함수.
  // Category onChanege함수는 SelectBox.js에 있다.
  const onChange = (e) => {
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
      onInsert(inputs.content, '2');
      addTodo(inputs);
      setInputs({
        content: '',
        categoryId: '', //카테고리 인풋 없애기 정리 (1)
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
          value={categoryIdSelected.value}
          //SelectBox에서 값이 변경되면 setCategoryIdSelected 값도 변경.
          setValue={(value) => {
            setInputs((state) => ({
              ...state,
              categoryId: value,
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
