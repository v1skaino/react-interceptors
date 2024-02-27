import { instance } from '../instance';

export const fetchAllUsers = async () => {
  return await instance.get('/users');
};
