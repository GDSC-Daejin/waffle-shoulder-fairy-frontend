import React from 'react';
import {
  ContentWrapper,
  ItemWrapper,
  ListCheck,
  ListItem,
  ListTitle,
  TodoNothing,
} from './styled';
import { todoZustandStore } from '../../store/todoZustandStore';

const TodayList = ({ todos }) => {
  const { toggleCompletedTodo } = todoZustandStore();

  let show;
  if (todos.length === 0) {
    //todos에 값이 하나도 없을 경우 Nothing 화면 띄움
    show = <TodoNothing>존재하지 않아요</TodoNothing>;
  } else {
    //todos에 값이 하나라도 있는 경우 TodoList 화면 띄움
    show = (
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
        ;
      </>
    );
  }

  return (
    <ContentWrapper>
      <ListTitle>🌞오늘의 일정🌞</ListTitle>
      {show}
    </ContentWrapper>
  );
};

export default TodayList;
