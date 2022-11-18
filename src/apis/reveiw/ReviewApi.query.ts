import { useQuery } from '@tanstack/react-query';

import { getReviewList } from './ReviewListApi';

export const useGetReviewList = (page: number, userId?: number) => {
  const { data, isLoading } = useQuery(
    ['review-list', page],
    () => {
      if (userId && page) return getReviewList(page, userId);
      else return getReviewList(page);
    },
    { enabled: !!page },
  );
  return { data, isLoading };
};
