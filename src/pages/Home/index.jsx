import React, { useCallback, useRef, useState } from 'react';
import { InputWrapper } from '../../styles/layouts';
import TodoInsult from '../../components/Todo/TodoInsult';
import TodoList from '../../components/Todo/TodoList';
//import { mockTodoList } from '../../mock/todo';
//import { todoState } from '../../store/todoState';
import ToDoEdit from '../../components/Todo/TodoEdit';

const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      content: 'ex) 와플 회의 8시',
      isCompleted: false,
    },
  ]);
  const nextId = useRef(2);
  //투두추가
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
  //투두삭제
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  //투두수정
  const [insertToggle, setInsertToggle] = useState(false); //플래그 역할을 해줄 state
  const [selectedTodo, setSelectedTodo] = useState(null);
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };
  //수정아이콘 onClick event 함수
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  return (
    <>
      <InputWrapper>
        <TodoInsult onInsert={onInsert} />
        {insertToggle && <ToDoEdit />}
      </InputWrapper>
      <TodoList todos={todos} onRemove={onRemove} />
    </>
  );
};

export default Home;
