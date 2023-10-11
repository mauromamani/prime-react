import { User } from '@/interfaces/users.interface';
import api from '.';

const URLS = {
  getUsersUrl: '/users',
};

export const getUsersApi = () => {
  return api.get<User[]>(URLS.getUsersUrl);
};
/*
export const getUsersApi = (limit, order) => {
  // const params = `${URLS.getUsersUrl}?limit=${limit}&order=${order}`
  return api.get<User[]>(URLS.getUsersUrl);
};
*/
