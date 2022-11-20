import React from 'react';
import { InputWrapper } from '../../styles/layouts';
import TodoInsult from '../../components/Todo/TodoInsult';
import TodoList from '../../components/Todo/TodoList';

const Home = () => {
  return (
    <>
      <InputWrapper>
        <TodoInsult />
      </InputWrapper>
      <TodoList />
    </>
  );
};

export default Home;
