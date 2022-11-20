import styled, { css, keyframes } from 'styled-components';
const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;
export const CloseBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
`;
export const TodoMemo = styled.p`
  font-size: 0.9rem;
  color: black;
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
`;

export const TodoContent = styled.header`
  color: black;
`;

export const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: default;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  /* animation-name: ${slideUp};
  ${(props) =>
    props.isOpen &&
    css`
      animation-name: ${fadeOut};
    `}} */
  section > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }
  section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  section > footer button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
  }
`;

export const ModalSection = styled.section`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;
`;

export const ModalFooter = styled.footer`
  padding: 12px 16px;
  text-align: right;
`;
