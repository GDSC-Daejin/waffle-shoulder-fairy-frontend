import React, { useCallback, useEffect, useState } from 'react';
import { InputWrapper } from '../../styles/layouts';
import TodoInsult from '../../components/Todo/TodoInsult';
import TodoList from '../../components/Todo/TodoList';
import { mockTodoList } from '../../mock/todo';
//import { todoState } from '../../store/todoState';
import ToDoEdit from '../../components/Todo/TodoEdit';
import { addTodo, getTodoList } from '../../apis/todo';
import { getCategoryList } from '../../apis/category';

const Home = () => {
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

  //조회
  const setTodoList = async () => {
    const res = await getTodoList(todos.cateory);
    // eslint-disable-next-line no-console
    console.log(res);
  };
  const getSetCategory = async () => {
    const res = await getCategoryList(todos.category);
    // eslint-disable-next-line no-console
    console.log(res);
  };
  useEffect(() => {
    setTodoList();
    getSetCategory();
  }, []);
  //투두추가
  const onInsert = useCallback(
    async (content, categoryId) => {
      console.log(content, categoryId);
      const todo = {
        content: content,
        categoryId: categoryId,
        isChecked: false,
      };

      //추가하기
      const res = await addTodo(todo, categoryId);
      console.log(res);

      setTodos((todos) => todos.concat(todo));
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
  return (
    <>
      <InputWrapper>
        <TodoInsult onInsert={onInsert} />
        <ToDoEdit />
      </InputWrapper>
      <TodoList todos={todos} onRemove={onRemove} />
    </>
  );
};

export default Home;
