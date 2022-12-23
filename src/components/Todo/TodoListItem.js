import React from 'react';
import {
  CheckInput,
  EditBtn,
  MemoContent,
  RemoveBtn,
  TodoContent,
  TodoItemWrapper,
} from './styled';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, content, category, checked } = todo;

  return (
    <TodoItemWrapper>
      <CheckInput
        type="checkbox"
        defaultChecked={checked}
        onClick={() => onToggle(id)}
      />
      <TodoContent isCompleted={checked}>{content}</TodoContent>
      <MemoContent>{category}</MemoContent>
      <EditBtn />
      <RemoveBtn onClick={() => onRemove(id)} />
    </TodoItemWrapper>
  );
};

export default TodoListItem;
