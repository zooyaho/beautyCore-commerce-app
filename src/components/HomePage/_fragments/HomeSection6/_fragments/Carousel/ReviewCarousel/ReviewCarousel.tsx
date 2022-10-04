import Slider from 'react-slick';

import { Box, Container, Divider, Flex, Image, Text } from '@chakra-ui/react';

import PrintRatingStars from '@components/common/PrintRatingStars/PrintRatingStars';

import { formatDate } from '@utils/format';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ReviewProps {
  id: number;
  user: number;
  product: number;
  rate: number;
  content: string;
  reviewimageSet: [
    {
      reviewId: number;
      url: string;
    },
  ];
  created: Date;
}

const DUMMMY_REVIEW = [
  {
    id: 'u1',
    user: 'zooyaho',
    product: 2,
    rate: 1.5,
    content:
      '순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
    reviewimageSet: [
      {
        reviewId: 'r1',
        url: '/images/home/Rectangle_9.png',
      },
    ],
    created: '2022-03-26T12:22:25.934Z',
  },
  {
    id: 'u2',
    user: 'mark',
    product: 2,
    rate: 4,
    content:
      '순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
    reviewimageSet: [
      {
        reviewId: 'r1',
        url: '/images/home/Rectangle_9.png',
      },
      {
        reviewId: 'r2',
        url: '/images/home/Rectangle_10.png',
      },
    ],
    created: '2022-09-22T12:22:25.934Z',
  },
  {
    id: 'u3',
    user: 'ganghoon',
    product: 2,
    rate: 3.5,
    content:
      '순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
    reviewimageSet: [
      {
        reviewId: 'r1',
        url: '/images/home/Rectangle_9.png',
      },
      {
        reviewId: 'r2',
        url: '/images/home/Rectangle_10.png',
      },
      {
        reviewId: 'r3',
        url: '/images/home/Rectangle_11.png',
      },
    ],
    created: '2022-05-19T12:22:25.934Z',
  },
];

function ReviewCarousel() {
  const settings = {
    infinite: false,
    swipeToSlide: true,
    centerMode: false,
    variableWidth: false,
  };
  return (
    <Slider {...settings}>
      {DUMMMY_REVIEW.map((review) => (
        <Box p="5rem .5rem 1rem" key={review.id}>
          <Container borderRadius="20px" boxShadow="lg" py="1.5rem">
            <Box as="header" mb="1.5rem">
              <Flex justifyContent="space-between">
                <Text textStyle="sm" fontWeight="bold">
                  {review.user}
                </Text>
                <PrintRatingStars
                  rate={review.rate}
                  alignItems="center"
                  starBoxSize="12px"
                />
              </Flex>
              <Text textStyle="sm" textColor="gray.700">
                {formatDate(review.created)}
              </Text>
            </Box>
            <Text mb="1.3rem">{review.content}</Text>
            <Divider />
            <Flex mt="1.3rem" gap=".6rem">
              {review.reviewimageSet.map((img) => (
                <Image key={img.reviewId} src={img.url} alt="화장품 이미지" />
              ))}
            </Flex>
          </Container>
        </Box>
      ))}
    </Slider>
  );
}
export default ReviewCarousel;
