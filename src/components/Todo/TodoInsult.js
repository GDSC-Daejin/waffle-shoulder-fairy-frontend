import React, { useCallback, useEffect, useState } from 'react';
import {
  AddBtn,
  CalendarBtn,
  CateBtn,
  Hr,
  MemoInput,
  TagBtn,
  TodoInput,
  TodoInputWrapper,
} from './styled';

const TodoInsult = ({ onInsert }) => {
  const [inputs, setInputs] = useState({
    content: '',
    memo: '',
  });
  const { content, memo } = inputs; // 비구조화 할당을 통해 값 추출

  // 키보드 입력을 받는 함수
  const onChange = (e) => {
    const { value, name } = e.target; //e.target에서 name,value 추출
    setInputs({
      ...inputs, //기존의 input 객체 복사
      [name]: value, //name 키를 가진 값을 value 로 설정
    });
  };

  // todo 제출 함수
  const onSubmit = useCallback(
    (e) => {
      setInputs({
        content: '',
        memo: '',
      });
      onInsert(inputs);
      e.preventDefault();
    },
    [onInsert, inputs],
  );
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
        <AddBtn onClick={onSubmit} />
        <Hr />
        {/* 메모 작성 */}
        <MemoInput
          placeholder="카테고리"
          name="memo"
          type={'text'}
          value={memo}
          onChange={onChange}
          size={'0.8rem'}
          height={'2rem'}
        />
        {/* 카테고리 버튼 */}
        <TagBtn />
        {/* 달력 버튼 */}
        <CalendarBtn />
      </form>
      <CateBtn>카테 추가</CateBtn>
      <CateBtn>카테 수정</CateBtn>
    </TodoInputWrapper>
  );
};

export default TodoInsult;
