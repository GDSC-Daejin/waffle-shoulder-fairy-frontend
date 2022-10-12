import React, { useState } from 'react';
import {
  CheckInput,
  EditBtn,
  RemoveBtn,
  TodoContent,
  TodoItemWrapper,
} from './styled';
import Modal from '../Modal';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, content, checked, memo } = todo;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <TodoItemWrapper>
      <CheckInput
        type="checkbox"
        defaultChecked={checked}
        onClick={() => onToggle(id)}
      />
      <TodoContent onClick={openModal} isCompleted={checked}>
        {content}
      </TodoContent>
      {modalOpen && (
        <Modal open={modalOpen} close={closeModal} content={content}>
          {memo}
        </Modal>
      )}

      <EditBtn />
      <RemoveBtn onClick={() => onRemove(id)} />
    </TodoItemWrapper>
  );
};

export default TodoListItem;
