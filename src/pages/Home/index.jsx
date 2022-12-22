import React, { useCallback, useRef, useState } from 'react';
import { InputWrapper } from '../../styles/layouts';
import TodoInsult from '../../components/Todo/TodoInsult';
import TodoList from '../../components/Todo/TodoList';
//import { mockTodoList } from '../../mock/todo';
//import { todoState } from '../../store/todoState';

const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      content: 'ex) 와플 회의 8시',
      isCompleted: false,
    },
  ]);
  const nextId = useRef(2);
  const onInsert = useCallback(
    (content) => {
      const todo = {
        id: nextId.current,
        content,
        isCompleted: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  return (
    <>
      <InputWrapper>
        <TodoInsult onInsert={onInsert} />
      </InputWrapper>
      <TodoList todos={todos} onRemove={onRemove} />
    </>
  );
};

export default Home;
