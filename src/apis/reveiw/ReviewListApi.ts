import instance from '@apis/_axios/instance';

import { Presigned_url, Review, ReviewList } from './ReviewListApi.type';

export async function getReviewList(): Promise<ReviewList> {
  const { data } = await instance.get('/v1/review/?page=1');
  return data;
}
export async function postReview(body: Partial<Review>): Promise<ReviewList> {
  const { data } = await instance({
    method: 'POST',
    url: '/v1/review/',
    data: body,
  });
  return data;
}
export async function postPresigned_url(
  body: Partial<Presigned_url>,
): Promise<Partial<Presigned_url>> {
  const { data } = await instance({
    method: 'POST',
    url: '/v1/presigned_url/',
    data: body,
  });
  return data;
}
