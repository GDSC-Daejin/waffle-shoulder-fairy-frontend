import React from 'react';
import {
  InputWrapper,
  LayoutContainer,
  Main,
  ProfileWrapper,
  SideBar,
  UserImg,
  UserName,
  UserText,
} from './styled';
import TodoInsult from '../../components/Todo/TodoInsult';
import TodoList from '../../components/Todo/TodoList';
import Nothing from './Nothing';
import TodayList from '../../components/TodayList';
import { todoZustandStore } from '../../store/todoZustandStore';

const Home = () => {
  const { todos } = todoZustandStore();

  //조건부 렌더링
  let show;
  if (todos.length !== 0) {
    //todos에 값이 하나라도 있는 경우 TodoList 화면 띄움
    show = <TodoList todos={todos} />;
  } else {
    //todos에 값이 하나도 없을 경우 Nothing 화면 띄움
    show = <Nothing />;
  }

  return (
    <LayoutContainer>
      {/* 화면 좌측의 사이드바 */}
      <SideBar>
        <ProfileWrapper>
          <UserImg />
          <UserName>MiniMini</UserName>
          <UserText>🍀 시간이 금이다!</UserText>
        </ProfileWrapper>
        <TodayList todos={todos} />
      </SideBar>
      {/* 화면의 메인 */}
      <Main>
        {/* todo 입력창 */}
        <InputWrapper>
          <TodoInsult />
        </InputWrapper>
        {/* 조건부 렌더링에 따라 다른 화면을 보여주는 변수 */}
        {show}
      </Main>
    </LayoutContainer>
  );
};

export default Home;
