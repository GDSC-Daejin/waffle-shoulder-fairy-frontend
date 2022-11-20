import React, { Component, useCallback, useState } from 'react';
import SelectBox from './SelectBox';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import {
  AddBtn,
  CalendarBtn,
  CateBtn,
  Hr,
  MemoInput,
  SelectBoxs,
  TagBtn,
  TodoInput,
  TodoInputWrapper,
} from './styled';
// SelectBox에 props로 보낼 옵션값들
const selectOptions = ['학교', '동아리', '취미'];
// 값을 받기 전, 값이 전부 공백인 객체형태의 state
const TodoInsult = ({ onInsert }) => {
  const [inputs, setInputs] = useState({
    content: '',
    memo: '',
    cateAdd: '',
  });
  const { content, cateAdd } = inputs; // 비구조화 할당을 통해 값 추출
  // 키보드 입력을 받는 함수
  const onChange = (e) => {
    const { value, name } = e.target; //e.target에서 name,value 추출
    setInputs({
      ...inputs, //기존의 input 객체 복사
      [name]: value, //name 키를 가진 값을 value 로 설정
    });
  };
  //모달 세팅
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpens, setModalIsOpens] = useState(false);
  // todo 제출 함수
  const onSubmit = useCallback(
    (e) => {
      setInputs({
        content: '',
        memo: '',
        cateAdd: '',
      });
      onInsert(inputs);
      e.preventDefault();
      selectOptions.concat(cateAdd);
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
        {/*카테고리 부분 SelectBox*/}
        <SelectBox
          // 카테고리값 설정
          value={inputs.memo}
          setValue={(value) => {
            setInputs((state) => ({
              ...state,
              memo: value,
            }));
          }}
          // 추가로 셀렉박스에 넘겨줄 리스트를 props에 넣어준다.
          options={selectOptions}
        />
        {/*
        <MemoInput
          placeholder="카테고리추가(test)"
          name="cateAdd"
          type={'text'}
          value={cateAdd}
          onChange={onChange}
          size={'0.8rem'}
          height={'2rem'}
        />
        */}
        {/* 카테고리 버튼 <TagBtn />*/}
        {/* 달력 버튼 <CalendarBtn />*/}
        <>
          <CateBtn onClick={() => setModalIsOpens(true)}>카테고리 수정</CateBtn>
          <Modal isOpen={modalIsOpens}>
            <h1>추가할 카테고리명</h1>
            <input />
            <button onClick={() => setModalIsOpens(false)}>추가</button>
            <hr></hr>
            <h1>삭제할 카테고리명</h1>
            <input />
            <button onClick={() => setModalIsOpens(false)}>삭제</button>
          </Modal>
        </>
        <>
          <CateBtn onClick={() => setModalIsOpen(true)}>달력</CateBtn>
          <Modal isOpen={modalIsOpen}>
            <Calendar></Calendar>
            <hr />
            <button onClick={() => setModalIsOpen(false)}>날짜 입력</button>
          </Modal>
        </>
      </form>
    </TodoInputWrapper>
  );
};

export default TodoInsult;
