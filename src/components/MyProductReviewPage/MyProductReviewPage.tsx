import React from 'react';

import {
  Box,
  Button,
  ChakraProps,
  Container,
  Divider,
  Flex,
  Image,
  Img,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import {
  RatingHalfStarIcon,
  RatingStarIcon,
  RightArrowIcon,
} from 'generated/icons/MyIcons';

function MyProductReviewPage() {
  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="lg" fontWeight="bold" mt="1.6rem" px="1rem">
        주문내역
      </Text>
      <Box mt="3rem" mb=".5rem" fontWeight="bold" px="1rem">
        <Text>
          총{' '}
          <Text as="span" textColor="primary.500">
            78
          </Text>
          건
        </Text>
      </Box>
      {/* s: review item */}
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
            {/* <Flex gap="4px" alignItems="center">
              {[1, 2, 3, 4, 5].map((item) => {
                if (review.rate - (item - 1) === 0.5) {
                  return (
                    <RatingHalfStarIcon
                      key={item}
                      boxSize="12px"
                      color="primary.500"
                    />
                  );
                } else if (item <= review.rate) {
                  return (
                    <RatingStarIcon
                      key={item}
                      boxSize="8px"
                      color="primary.500"
                    />
                  );
                } else {
                  return (
                    <RatingStarIcon
                      key={item}
                      boxSize="8px"
                      color="gray.400"
                    />
                  );
                }
              })}
            </Flex> */}
          </Flex>
          <Text textColor="gray.700">2021.03.29</Text>
        </Box>
        <Flex flexDirection="column" mt="1rem" mb="1.5rem">
          <Text>순해서 아이피부에도 자극없이 사용할 수 있어요!</Text>
          <Flex gap=".7rem" mt=".5rem">
            <Img src="./images/dummyImg/Rectangle_2008.png" alt="상품 이미지" />
            <Img src="./images/dummyImg/Rectangle_2008.png" alt="상품 이미지" />
            <Img src="./images/dummyImg/Rectangle_2008.png" alt="상품 이미지" />
          </Flex>
        </Flex>
        <Divider />
      </Container>
      {/* e: review item */}
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
      <Flex justifyContent="center" alignItems="center" my="3rem">
        <Button variant="pageButton">1</Button>
        <Button variant="pageButton">2</Button>
        <Button variant="pageButton">3</Button>
        <Button variant="pageButton">4</Button>
        <Button variant="pageButton">5</Button>
        <RightArrowIcon boxSize="10px" ml="1rem" />
      </Flex>
    </Box>
  );
}

export default MyProductReviewPage;
