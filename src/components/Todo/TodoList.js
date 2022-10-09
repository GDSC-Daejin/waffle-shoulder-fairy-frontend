import React from 'react';
import TodoListItem from './TodoListItem';
import { TodoListWrapper } from './styled';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
