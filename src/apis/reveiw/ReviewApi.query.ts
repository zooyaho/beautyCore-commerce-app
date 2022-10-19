import { useQuery } from '@tanstack/react-query';

import { getReviewList } from './ReviewListApi';

export const useGetReviewList = () => {
  const { data } = useQuery(['review-list'], getReviewList);
  return data?.results;
};
