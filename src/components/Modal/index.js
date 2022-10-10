import React, { useEffect } from 'react';
import './styled.css';
import {
  CloseBtn,
  ModalFooter,
  ModalSection,
  ModalWrapper,
  TodoContent,
  TodoMemo,
} from './styled';
const Modal = (props) => {
  const { open, close, content } = props;
  let memo;

  if (props.children === '') {
    memo = '작성한 메모 없음';
  } else {
    memo = props.children;
  }
  //모달창 띄웠을 시 스크롤 불가
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <ModalWrapper className={open ? 'openModal modal' : 'modal'}>
      {/* isOpen={open ? 'openModal modal' : 'modal'} */}
      {open ? (
        <ModalSection>
          <TodoContent>
            {content}
            <CloseBtn onClick={close}>&times;</CloseBtn>
          </TodoContent>
          <TodoMemo>{memo}</TodoMemo>
          <ModalFooter>
            <CloseBtn onClick={close}>close</CloseBtn>
          </ModalFooter>
        </ModalSection>
      ) : null}
    </ModalWrapper>
  );
};

export default Modal;
