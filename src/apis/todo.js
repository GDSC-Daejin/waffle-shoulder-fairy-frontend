import { Instance } from './instance';
//조회
export const getTodoList = async (categoryId) => {
  return await Instance.get(`/category/${categoryId}/todo`);
};
//등록
export const addTodo = async (payload, categoryId) => {
  return await Instance.post(`/category/${categoryId}/todo`, payload);
};
//삭제
export const removeTodo = async (categoryId) => {
  return await Instance.delete(`/category/${categoryId}/todo`);
};
//수정
export const updateTodo = async (payload, categoryId) => {
  return await Instance.put(`/category/${categoryId}/todo`, payload);
};
