import { useQuery } from '@tanstack/react-query';

import { getReviewList } from './ReviewListApi';

export const useGetReviewList = (
  page: number,
  page_size: number,
  userId?: number,
) => {
  const { data, isLoading } = useQuery(
    ['review-list', page],
    () => {
      if (userId) return getReviewList(page, page_size, userId);
      else return getReviewList(page, page_size);
    },
    { enabled: !!page },
  );
  return { data, isLoading };
};
