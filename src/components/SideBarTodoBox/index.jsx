import React from 'react';
import { ListTitle, TodoContentWrapper } from './styled';
import TodayListSection from '../TodayListSection';

const SideBarTodoBox = ({ todos }) => {
  return (
    <TodoContentWrapper>
      <ListTitle>πμ€λμ μΌμ π</ListTitle>
      <TodayListSection todos={todos} />
    </TodoContentWrapper>
  );
};

export default SideBarTodoBox;
