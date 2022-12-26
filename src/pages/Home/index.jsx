import React, { useCallback, useEffect, useRef, useState } from 'react';
import { InputWrapper } from '../../styles/layouts';
import TodoInsult from '../../components/Todo/TodoInsult';
import TodoList from '../../components/Todo/TodoList';
import { mockTodoList } from '../../mock/todo';
//import { todoState } from '../../store/todoState';
import { getTodoList } from '../../apis/todo';
import { getCategoryList } from '../../apis/category';

const Home = () => {
  //조회
  const setTodoList = async () => {
    const res = await getTodoList('1');
    // eslint-disable-next-line no-console
    console.log(res);
  };
  const getSetCategory = async () => {
    const res = await getCategoryList('1');
    // eslint-disable-next-line no-console
    console.log(res);
  };
  //추가하기
  const addTodoList = async () => {
    const res = await addTodoList();
    // eslint-disable-next-line no-console
    console.log(res);
  };
  useEffect(() => {
    setTodoList();
    getSetCategory();
    addTodoList();
  }, []);
  const [todos, setTodos] = useState([
    {
      id: 0,
      content: 'ex) 와플 회의 8시',
      cateory: '동아리',
      isCompleted: false,
    },
    {
      mockTodoList,
    },
  ]);
  const nextId = useRef(2);
  //투두추가
  const onInsert = useCallback(
    (content, category) => {
      const todo = {
        id: nextId.current,
        content,
        category,
        isCompleted: false,
      };
      //투두 추가하기 api
      addTodoList(todos, todos.id);
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
      </InputWrapper>
      <TodoList todos={todos} onRemove={onRemove} />
    </>
  );
};

export default Home;
