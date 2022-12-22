import React from 'react';
import TodoListItem from './TodoListItem';
import { TodoListWrapper } from './styled';
//import { todoState } from '../../store/todoState';
//onRemove, onToggle
const TodoList = ({ todos, onRemove, onToggle }) => {
  //const todos = todoState((state) => state.todos);
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
