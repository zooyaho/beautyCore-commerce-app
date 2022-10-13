import instance from '@apis/_axios/instance';

import { Review, ReviewList } from './ReviewListApi.type';

export async function getReviewList(): Promise<ReviewList> {
  const { data } = await instance.get('/v1/review/?page=1');
  return data;
}
