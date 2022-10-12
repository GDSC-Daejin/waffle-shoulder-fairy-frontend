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
  const { id, content, isCompleted, memo } = todo;
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
        checked={isCompleted || false}
        onClick={() => toggleCompletedTodo(id)}
      />
      <TodoContent onClick={openModal} isCompleted={isCompleted}>
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
