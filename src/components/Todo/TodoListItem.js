import React, { useState } from 'react';
import {
  CheckInput,
  EditBtn,
  RemoveBtn,
  TodoContent,
  TodoItemWrapper,
} from './styled';
import Modal from '../Modal';
import { todoZustandStore } from '../../store/todoZustandStore';

const TodoListItem = ({ todo }) => {
  const { id, content, checked, memo } = todo;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const { removeTodo, toggleCompletedTodo, updateTodo } = todoZustandStore();
  return (
    <TodoItemWrapper>
      <CheckInput
        type="checkbox"
        defaultChecked={checked}
        onClick={() => toggleCompletedTodo(id)}
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
      <RemoveBtn onClick={() => removeTodo(id)} />
    </TodoItemWrapper>
  );
};

export default TodoListItem;
