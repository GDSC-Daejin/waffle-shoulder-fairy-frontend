import React from 'react';
import {
  CheckInput,
  EditBtn,
  RemoveBtn,
  TodoContent,
  TodoItemWrapper,
} from './styled';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, content, checked } = todo;

  return (
    <TodoItemWrapper>
      <CheckInput
        type="checkbox"
        defaultChecked={checked}
        onClick={() => onToggle(id)}
      />
      <TodoContent isCompleted={checked}>{content}</TodoContent>
      <EditBtn />
      <RemoveBtn onClick={() => onRemove(id)} />
    </TodoItemWrapper>
  );
};

export default TodoListItem;
