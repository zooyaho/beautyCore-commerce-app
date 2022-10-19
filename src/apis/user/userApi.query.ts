import { useQuery } from '@tanstack/react-query';

import { getUserMe } from './userApi';

export const useGetUserMe = () => {
  const { data, isLoading } = useQuery(['user'], getUserMe);
  return { data, isLoading };
};
