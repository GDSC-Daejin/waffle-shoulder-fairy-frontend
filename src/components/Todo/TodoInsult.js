import React, { useState } from 'react';
import {
  AddBtn,
  Hr,
  MemoInput,
  //TagBtn,
  TodoInput,
  TodoInputWrapper,
} from './styled';
import { todoState } from '../../store/todoState';

const TodoInsult = ({ onInsert }) => {
  const [inputs, setInputs] = useState({
    content: '',
    category: '',
  });
  const { addTodo } = todoState();

  const { content, category } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const addTodoHandler = (e) => {
    //내용이 입력되었으면 TODO 추가
    if (inputs.content) {
      onInsert(content, category);
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
        {/* 내용 작성 */}
        <TodoInput
          placeholder="추가할 일정"
          name="content"
          value={content}
          type={'text'}
          onChange={onChange}
        />
        {/* 추가 버튼 */}
        <AddBtn type="submit" onClick={addTodoHandler} />
        <Hr />
        {/* 메모 작성 */}
        <MemoInput
          placeholder="카테고리"
          name="category"
          type={'text'}
          value={category}
          onChange={onChange}
          size={'0.8rem'}
          height={'2rem'}
        />
        {/* 카테고리 버튼 */}
        {/*<TagBtn />*/}
      </form>
    </TodoInputWrapper>
  );
};

export default TodoInsult;
