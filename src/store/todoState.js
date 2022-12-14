import create from 'zustand';

//devtools import
import { devtools } from 'zustand/middleware';
import { addTodo, getTodoList, removeTodo, updateTodo } from '../apis/todo';
import { mockTodoList } from '../mock/todo';

export const todoState = create(
  devtools((set) => ({
    todos: mockTodoList,

    getTodos: async () =>
      set(async (state) => {
        const { data } = await getTodoList();
        return { todos: data };
      }),

    addTodo: (payload) => set(async (state) => await addTodo(payload)),

    removeTodo: (id) =>
      set(async (state) => {
        await removeTodo(id);
      }),

    updateTodo: (data) =>
      set(async (state) => {
        const payload = {
          content: data.content,
          title: data.title,
          isCompleted: !data.isCompleted,
        };
        await updateTodo(payload, data.id);
      }),

    toggleTodo: (data) =>
      set(async (state) => {
        const payload = {
          content: data.content,
          title: data.title,
          isCompleted: !data.isCompleted,
        };
        const response = await updateTodo(payload, data.id);
        if (response.status === 200) {
          // 성공일 경우
        }
        // console.log(response.data);
      }),
  })),
);
