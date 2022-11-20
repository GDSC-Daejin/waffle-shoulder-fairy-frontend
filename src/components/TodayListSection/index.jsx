import React from 'react';
import { ItemWrapper, ListCheck, ListItem } from './styled';
import { todoState } from '../../store/todoState';

const TodayListSection = ({ todos }) => {
  const { toggleCompletedTodo } = todoState();

  const isEmpty = todos.length === 0;

  return (
    <>
      {isEmpty ? (
        <div>비어있어염</div>
      ) : (
        <>
          {todos.map((todo) => (
            <ItemWrapper key={todo.id}>
              <ListCheck
                onClick={() => toggleCompletedTodo(todo.id)}
                type="checkbox"
                checked={todo.isCompleted || false}
              />
              <ListItem isCompleted={todo.isCompleted}>{todo.content}</ListItem>
            </ItemWrapper>
          ))}
        </>
      )}
    </>
  );
};

export default TodayListSection;
