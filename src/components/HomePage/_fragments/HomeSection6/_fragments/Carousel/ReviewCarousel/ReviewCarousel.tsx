import Slider from 'react-slick';

import { Box, Container, Divider, Flex, Image, Text } from '@chakra-ui/react';

import { RatingStarIcon } from 'generated/icons/MyIcons';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

/* interface ReviewProps { 
  id: number;
  user: number;
  product: number;
  rate: number;
  content: string;
  reviewimageSet: [
    {
      reviewId: number;
      url: string;
    }
  ];
  created: date;
} */

const DUMMMY_REVIEW = [
  {
    id: 'u1',
    user: 'zooyaho',
    product: 2,
    rate: 3.5,
    content:
      '순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
    reviewimageSet: [
      {
        reviewId: 'r1',
        url: '/',
      },
    ],
    created: '2022-09-26T12:22:25.934Z',
  },
  {
    id: 'u1',
    user: 'zooyaho',
    product: 2,
    rate: 3.5,
    content:
      '순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
    reviewimageSet: [
      {
        reviewId: 'r1',
        url: '/',
      },
    ],
    created: '2022-09-26T12:22:25.934Z',
  },
  {
    id: 'u1',
    user: 'zooyaho',
    product: 2,
    rate: 3.5,
    content:
      '순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
    reviewimageSet: [
      {
        reviewId: 'r1',
        url: '/',
      },
    ],
    created: '2022-09-26T12:22:25.934Z',
  },
];
/* interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
} */

function ReviewCarousel() {
  const settings = {
    infinite: false,
    swipeToSlide: true,
    centerMode: false,
    variableWidth: false,
  };
  return (
    <Slider {...settings}>
      <Box p="5rem .5rem 1rem">
        <Container borderRadius="20px" boxShadow="lg" py="1.5rem">
          <Box as="header" mb="1.5rem">
            <Flex justifyContent="space-between">
              <Text textStyle="sm" fontWeight="bold">
                zooyaho
              </Text>
              <Flex gap="4px" alignItems="center">
                <RatingStarIcon />
                <RatingStarIcon />
                <RatingStarIcon />
                <RatingStarIcon sx={{ path: { fill: 'gray.400' } }} />
                <RatingStarIcon sx={{ path: { fill: 'gray.400' } }} />
                {/* <Controller
              control={control}
              name="rating"
              render={({ field: { value, onChange } }) => {
                return (
                  <FormHelper mb="20px" label="별점" textStyle="md">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <RatingStars
                        rate={item}
                        key={item}
                        value={value}
                        onChange={onChange}
                      />
                    ))}
                  </FormHelper>
                )
              }}
            /> */}
              </Flex>
            </Flex>
            <Text textStyle="sm" textColor="gray.700">
              2022-09-26
            </Text>
          </Box>
          <Text mb="1.3rem">
            순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온
            가족이 사용할 수 있는 화장품이라고 추천받았어요. 처음엔 반신반의하는
            마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을
            사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의
            완치단계입니다 . 아이 엄마들에게 추천드려요!
          </Text>
          <Divider />
          <Flex mt="1.3rem" gap=".6rem">
            <Image src="/images/home/Rectangle_9.png" alt="화장품 이미지" />
            <Image src="/images/home/Rectangle_10.png" alt="화장품 이미지" />
            <Image src="/images/home/Rectangle_11.png" alt="화장품 이미지" />
          </Flex>
        </Container>
      </Box>
      <Box p="5rem .5rem 1rem">
        <Container borderRadius="20px" boxShadow="lg" py="1.5rem">
          <Box as="header" mb="1.5rem">
            <Flex justifyContent="space-between">
              <Text textStyle="sm" fontWeight="bold">
                zooyaho
              </Text>
              <Flex gap="4px" alignItems="center">
                <RatingStarIcon />
                <RatingStarIcon />
                <RatingStarIcon />
                <RatingStarIcon sx={{ path: { fill: 'gray.400' } }} />
                <RatingStarIcon sx={{ path: { fill: 'gray.400' } }} />
                {/* <Controller
              control={control}
              name="rating"
              render={({ field: { value, onChange } }) => {
                return (
                  <FormHelper mb="20px" label="별점" textStyle="md">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <RatingStars
                        rate={item}
                        key={item}
                        value={value}
                        onChange={onChange}
                      />
                    ))}
                  </FormHelper>
                )
              }}
            /> */}
              </Flex>
            </Flex>
            <Text textStyle="sm" textColor="gray.700">
              2022-09-26
            </Text>
          </Box>
          <Text mb="1.3rem">
            순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온
            가족이 사용할 수 있는 화장품이라고 추천받았어요. 처음엔 반신반의하는
            마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을
            사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의
            완치단계입니다 . 아이 엄마들에게 추천드려요!
          </Text>
          <Divider />
          <Flex mt="1.3rem" gap=".6rem">
            <Image src="/images/home/Rectangle_9.png" alt="화장품 이미지" />
            <Image src="/images/home/Rectangle_10.png" alt="화장품 이미지" />
            <Image src="/images/home/Rectangle_11.png" alt="화장품 이미지" />
          </Flex>
        </Container>
      </Box>
    </Slider>
  );
}
export default ReviewCarousel;
