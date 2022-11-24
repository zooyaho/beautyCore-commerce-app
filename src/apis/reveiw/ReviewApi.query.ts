import { UserMe } from '@apis/user/userApi.type';

import { useQuery } from '@tanstack/react-query';

import { getReviewList } from './ReviewListApi';

export const useGetReviewList = (
  page: number,
  userData?: UserMe,
  userId?: number,
) => {
  const { data, isLoading } = useQuery(
    ['review-list'],
    () => {
      if (userId && page) return getReviewList(page, userId);
      else return getReviewList(page);
    },
    { enabled: !!userData },
  );
  return { data, isLoading };
};
