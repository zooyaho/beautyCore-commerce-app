import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../helper';

const USER_KEY = '@user';

export type UserType = {
  user_id: number | undefined;
  auth_status: string;
};

export const getUser = () => {
  const userInfo = getLocalStorage<UserType>(USER_KEY);
  return userInfo;
};

export const setUser = (userInfo: UserType) => {
  setLocalStorage(USER_KEY, userInfo);
};

export const deleteUser = () => {
  removeLocalStorage(USER_KEY);
};
