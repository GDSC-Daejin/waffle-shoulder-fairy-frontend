import { Instance } from './instance';

export const getTodoList = async () => {
  return await Instance.get('/todo');
};

export const addTodo = async (payload) => {
  return await Instance.post('/todo', payload);
};

export const removeTodo = async (id) => {
  return await Instance.delete(`/todo/${id}`);
};

export const updateTodo = async (payload, id) => {
  return await Instance.put(`/todo/${id}`, payload);
};
