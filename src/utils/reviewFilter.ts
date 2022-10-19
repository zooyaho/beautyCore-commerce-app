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

export const reviewFilter = (reviewList: Review[], productType: string) => {
  return reviewList.filter((review) => {
    return review;
  });
};
