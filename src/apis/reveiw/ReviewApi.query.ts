import { useQuery } from '@tanstack/react-query';

import { getReviewList } from './ReviewListApi';

export const useGetReviewList = (
  page: number,
  enabled: boolean,
  userId?: number,
) => {
  const { data, isLoading } = useQuery(
    ['review-list', page],
    () => {
      if (userId && page) return getReviewList(page, userId);
      else return getReviewList(page);
    },
    { enabled: enabled },
  );
  return { data, isLoading };
};
