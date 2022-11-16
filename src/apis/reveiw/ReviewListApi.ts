import instance from '@apis/_axios/instance';

import { Presigned_url, Review, ReviewList } from './ReviewListApi.type';

export async function getReviewList(
  page: number,
  page_size: number,
  userId?: number,
): Promise<ReviewList> {
  const { data } = await instance.get(
    userId
      ? `/v1/review/?page=${page}&page_size=${page_size}&user_id=${userId}`
      : `/v1/review/?page=${page}&page_size=${page_size}`,
  );
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
