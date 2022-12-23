import { Instance } from './instance';

export const getCategoryList = async () => {
  return await Instance.get('/category');
};
