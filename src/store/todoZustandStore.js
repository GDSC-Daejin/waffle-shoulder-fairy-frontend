import create from 'zustand';

//devtools import
import { devtools } from 'zustand/middleware';

const date = new Date();
export const todoZustandStore = create(
  devtools((set) => ({
    //Todo 기본 데이터
    todos: [],
    //Todo 추가
    addTodo: (inputs) =>
      set((state) => ({
        todos: [
          {
            memo: inputs.memo,
            content: inputs.content,
            id: Math.random() * 100,
            date: date.toUTCString(),
            isCompleted: false,
          },
          ...state.todos,
        ],
      })),
    //Todo 삭제
    removeTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
    //Todo 업데이트
    updateTodo: (id, content) =>
      set((state) => {
        // const foundTodo = state.todos.find((todo) => todo.id === id);
        return {
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, content: content } : todo,
          ),
        };
      }),
    //Todo 완료 토글
    toggleCompletedTodo: (id) =>
      set((state) => {
        return {
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
          ),
        };
      }),
  })),
);
