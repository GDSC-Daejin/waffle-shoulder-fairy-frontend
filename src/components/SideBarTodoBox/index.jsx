import React from 'react';
import { ListTitle, TodoContentWrapper } from './styled';
import TodayListSection from '../TodayListSection';

const SideBarTodoBox = ({ todos }) => {
  return (
    <TodoContentWrapper>
      <ListTitle>🌞오늘의 일정🌞</ListTitle>
      <TodayListSection todos={todos} />
    </TodoContentWrapper>
  );
};

export default SideBarTodoBox;
