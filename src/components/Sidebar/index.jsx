import React from 'react';

import { todoState } from '../../store/todoState';
import SideBarTodoBox from '../SideBarTodoBox';
import { ProfileWrapper, UserImg, UserName, UserText } from './styled';

const Sidebar = () => {
  const todos = todoState((state) => state.todos);
  return (
    <>
      <ProfileWrapper>
        <UserImg />
        <UserName>User</UserName>
        <UserText>π μκ°μ΄ κΈμ΄λ€!</UserText>
      </ProfileWrapper>
      <SideBarTodoBox todos={todos} />
    </>
  );
};

export default Sidebar;
