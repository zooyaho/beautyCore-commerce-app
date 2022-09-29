import React from 'react';

import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Progress,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

import { getAverage, getStar } from '@utils/format';

import { RatingHalfStarIcon, RatingStarIcon } from 'generated/icons/MyIcons';

const reviews = {
  count: 5,
  next: 'http://api.example.org/accounts/?page=4',
  previous: 'http://api.example.org/accounts/?page=2',
  results: [
    {
      id: 1,
      userId: 'kelly',
      productId: 1,
      rate: 5,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 1,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 2,
      userId: 'ovan',
      productId: 2,
      rate: 4,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 2,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 3,
      userId: 'micheal',
      productId: 3,
      rate: 3,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 3,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 4,
      userId: 'john',
      productId: 4,
      rate: 2,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 4,
          url: '/images/ReviewImage.png',
        },
      ],
    },
    {
      id: 5,
      userId: 'evan',
      productId: 5,
      rate: 1,
      content: 'string',
      reviewimageSet: [
        {
          reviewId: 5,
          url: '/images/ReviewImage.png',
        },
      ],
    },
  ],
};

const array = [5, 5, 5, 3, 4, 2, 1, 1];

const DetailSection3 = () => {
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
      <Container pt="1.5rem">
        <Box as="header" mb="1.5rem" textStyle="sm">
          <Flex justifyContent="space-between">
            <Text fontWeight="bold">박지우</Text>
            <Flex gap="4px" alignItems="center">
              <RatingStarIcon boxSize="10px" color="primary.500" />
              <RatingStarIcon boxSize="10px" color="primary.500" />
              <RatingStarIcon boxSize="10px" color="primary.500" />
              <RatingStarIcon boxSize="10px" color="gray.400" />
              <RatingStarIcon boxSize="10px" color="gray.400" />
            </Flex>
          </Flex>
          <Text textColor="gray.700">2021.03.29</Text>
        </Box>
        <Flex flexDirection="column" mt="1rem" mb="1.5rem">
          <Text>순해서 아이피부에도 자극없이 사용할 수 있어요!</Text>
          <Flex gap=".7rem" mt=".5rem"></Flex>
        </Flex>
        <Divider />
      </Container>
    </>
  );
};

export default DetailSection3;
