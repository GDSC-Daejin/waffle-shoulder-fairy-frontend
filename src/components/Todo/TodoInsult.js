import React, { useCallback, useState } from 'react';
import {
  AddBtn,
  CalendarBtn,
  Hr,
  MemoInput,
  TagBtn,
  TodoInput,
  TodoInputWrapper,
} from './styled';

const TodoInsult = ({ onInsert }) => {
  /*const [inputs, setInputs] = useState({
    content: '',
    memo: '',
  });

  const { content, memo } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onSubmit = useCallback(
    (e) => {
      onInsert(inputs);
      setInputs({
        content: '',
        memo: '',
      });
      e.preventDefault();
    },
    [onInsert, inputs],
  );*/

  //지금 상태는 todo의 content(내용)만 받고 있습니다!
  //위에 주석을 달아놓은 코드는 memo까지 같이 받아 넘겨주는 함수 구현 중입니다!

  const [content, setContent] = useState('');

  // 키보드 입력을 받는 함수
  const onChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);
  // todo 제출 함수
  const onSubmit = useCallback(
    (e) => {
      onInsert(content);
      setContent('');
      e.preventDefault();
    },
    [onInsert, content],
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
          placeholder="상세설명"
          name="memo"
          type={'text'}
          //value={memo}
          //onChange={onChange}
          size={'0.8rem'}
          height={'2rem'}
        />
        {/* 카테고리 버튼 */}
        <TagBtn />
        {/* 달력 버튼 */}
        <CalendarBtn />
      </form>
    </TodoInputWrapper>
  );
};

export default TodoInsult;
