import React from 'react';

import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Img,
  Progress,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

import PrintRatingStars from '@components/common/PrintRatingStars/PrintRatingStars';

import { formatDate, getAverage, getStar } from '@utils/format';

import { RatingHalfStarIcon, RatingStarIcon } from 'generated/icons/MyIcons';

const DUMMMY_REVIEW = {
  count: 5,
  next: 'http://api.example.org/accounts/?page=4',
  previous: 'http://api.example.org/accounts/?page=2',
  results: [
    {
      id: 'u1',
      user: 'zooyaho',
      product: 2,
      rate: 1.5,
      content:
        '순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
      reviewimageSet: [
        {
          reviewId: 1,
          url: '/images/home/Rectangle_9.png',
        },
        {
          reviewId: 2,
          url: '/images/home/Rectangle_9.png',
        },
        {
          reviewId: 3,
          url: '/images/home/Rectangle_9.png',
        },
      ],
      created: '2022-03-26T12:22:25.934Z',
    },
    {
      id: 'u2',
      user: 'mark',
      product: 2,
      rate: 3,
      content:
        '아이 뿐 만아니라 온가족이 사용할 수 있는 화장품이라고 추천받았어요.처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
      reviewimageSet: [],
      created: '2022-05-16T12:22:25.934Z',
    },
    {
      id: 'u3',
      user: 'lee',
      product: 2,
      rate: 2.5,
      content:
        '처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 .아이 엄마들에게 추천드려요!',
      reviewimageSet: [
        {
          reviewId: 1,
          url: '/images/home/Rectangle_9.png',
        },
      ],
      created: '2022-05-06T12:22:25.934Z',
    },
  ],
};

const array = [5, 5, 5, 3, 4, 2, 1, 1];

const ReviewSection = () => {
  const { countNums, total, sum } = getAverage(array);
  return (
    <>
      <Flex direction="column" w="100%" my="23px" id="ReviewInfo">
        <HStack justify="space-between">
          <Text as="span" fontWeight="bold">
            리뷰
            <Box as="span" color="commerse.500">
              {` ${total}`}
            </Box>
            건
          </Text>
          <HStack w="193px">
            <Select
              placeholder="최신순"
              size="xs"
              bg="gray.200"
              rounded="5px"
              fontWeight="bold"
            >
              <option value="option2">평점 높은순</option>
              <option value="option3">평점 높은순</option>
            </Select>
            <Select
              placeholder="전체보기"
              size="xs"
              bg="gray.200"
              rounded="5px"
              fontWeight="bold"
            >
              <option value="option2">포토리뷰</option>
            </Select>
          </HStack>
        </HStack>
        <Flex justify="space-between" align="center" my="50px">
          <HStack>
            <Text
              w="40px"
              h="20px"
              bg="commerse.500"
              rounded="15px"
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              {sum}
            </Text>
            <HStack>
              {getStar(sum).map((num, i) => {
                if (num === 2) return <RatingStarIcon key={i} />;
                else if (num === 1) return <RatingHalfStarIcon key={i} />;
                else return <RatingHalfStarIcon key={i} />;
              })}
            </HStack>
          </HStack>
          <HStack spacing="-6">
            {countNums.reverse().map((num, i) => {
              return (
                <VStack key={i}>
                  <Flex>
                    <Progress
                      // color="primary.500"
                      colorScheme="pink"
                      position="relative"
                      value={(num / total) * 100}
                      w="50px"
                      h="10px"
                      mb="10px"
                      roundedRight="5px"
                      transform="rotateZ(-90deg)"
                    />
                  </Flex>
                  <Divider transform={'translateY(1px)'} />
                  <Text color="gray.600" fontSize="12px">
                    {5 - i}점
                  </Text>
                </VStack>
              );
            })}
          </HStack>
        </Flex>
      </Flex>
      {/* s: 리뷰 리스트 */}
      <Box pt="1.5rem">
        {DUMMMY_REVIEW.results.map((review) => (
          <Box key={review.id} mb="1.5rem" textStyle="sm">
            <Flex justifyContent="space-between">
              <Text fontWeight="bold">{review.user}</Text>
              <PrintRatingStars
                rate={review.rate}
                starBoxSize="12px"
                alignItems="center"
              />
            </Flex>
            <Text textColor="gray.700">{formatDate(review.created)}</Text>
            <Flex flexDirection="column" mt="1rem" mb="1.5rem">
              <Text
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
                textStyle="md"
              >
                {review.content}
              </Text>
              <Flex mt="1.3rem" gap=".6rem">
                {review.reviewimageSet.map((img) => {
                  console.log(img);
                  return (
                    <Img
                      key={img.reviewId}
                      src={`${img.url}`}
                      alt="리뷰 이미지"
                    />
                  );
                })}
              </Flex>
            </Flex>
            <Divider />
          </Box>
        ))}
      </Box>
      {/* e: 리뷰 리스트 */}
    </>
  );
};

export default ReviewSection;
