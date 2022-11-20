import React from 'react';
import TodoListItem from './TodoListItem';
import { TodoListWrapper } from './styled';

const TodoList = ({ todos }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
