interface Review {
  id: number;
  userId: number;
  productId: number;
  nickname: string;
  orderItemId: number;
  rate: number;
  content: string;
  reviewimageSet: [
    {
      reviewId: number;
      url: string;
    },
  ];
  created: string;
}

export const reviewFilter = (reviewList: Review[]) => {
  return reviewList.filter((review) => {
    return review;
  });
};
