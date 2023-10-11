import { getUsersApi } from '@/api/users.api';

export const getUsers = async () => {
  const response = await getUsersApi();
  return response.data;
};
/*
export const getUsers = async (limit, order) => {
  const response = await getUsersApi(limit, order);
  return response.data;
};
*/
