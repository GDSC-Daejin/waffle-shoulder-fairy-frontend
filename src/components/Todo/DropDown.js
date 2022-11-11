import React from 'react';

const DropDown = ({ todo, onRemove, onToggle }) => {
    const { id, content, memo, checked } = todo;
  
    return (
      <TodoItemWrapper>
        <CheckInput
          type="checkbox"
          defaultChecked={checked}
          onClick={() => onToggle(id)}
        />
        <TodoContent isCompleted={checked}>{content}</TodoContent>
        <MemoContent>{memo}</MemoContent>
        <EditBtn />
        <RemoveBtn onClick={() => onRemove(id)} />
      </TodoItemWrapper>
    );
  };

export default DropDown;