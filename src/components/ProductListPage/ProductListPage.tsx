import Link from 'next/link';
import React from 'react';

import { Box, Button, Container, Flex, Img, Text } from '@chakra-ui/react';

import ScrollToTop from '@components/common/ScrollToTop';

import { LAYOUT } from '@constants/layout';

import { RatingStarIcon } from 'generated/icons/MyIcons';

// interface ProductListPageProps extends ChakraProps {}
interface ITags {
  id: number;
  name: string;
}
interface IProduct {
  next: string;
  previous: string;
  results: [
    {
      id: number;
      name: string;
      description: string;
      price: number;
      capacity: number;
      tags: ITags[];
      avgRate: number;
      reviewCount: number;
      created: Date;
    },
  ];
}
const DUMMY_DATA = {
  results: [
    {
      id: 1,
      name: '크림',
      description: '촉촉하고 부드러운 보습감을 부여하는 마일드 크림',
      price: 25000,
      capacity: 250,
      tags: [
        {
          id: 1,
          name: '올인원',
        },
        {
          id: 2,
          name: '클렌저',
        },
        {
          id: 3,
          name: '마일드',
        },
        {
          id: 6,
          name: '크림',
        },
      ],
      avgRate: 4.5,
      reviewCount: 4,
      created: new Date(),
    },
    {
      id: 1,
      name: '크림',
      description: '촉촉하고 부드러운 보습감을 부여하는 마일드 크림',
      price: 25000,
      capacity: 250,
      tags: [
        {
          id: 1,
          name: '올인원',
        },
        {
          id: 2,
          name: '클렌저',
        },
        {
          id: 3,
          name: '마일드',
        },
        {
          id: 6,
          name: '크림',
        },
      ],
      avgRate: 4.5,
      reviewCount: 4,
      created: new Date(),
    },
    {
      id: 1,
      name: '크림',
      description: '촉촉하고 부드러운 보습감을 부여하는 마일드 크림',
      price: 25000,
      capacity: 250,
      tags: [
        {
          id: 1,
          name: '올인원',
        },
        {
          id: 2,
          name: '클렌저',
        },
        {
          id: 3,
          name: '마일드',
        },
        {
          id: 6,
          name: '크림',
        },
      ],
      avgRate: 4.5,
      reviewCount: 4,
      created: new Date(),
    },
  ],
};

function ProductListPage() {
  return (
    <>
      <Container pt={LAYOUT.HEADER.HEIGHT} pb="1.5rem" bg="gray.100">
        {DUMMY_DATA.results.map((product) => (
          <Box
            key={product.id}
            boxShadow="0 0 10px #1A1A1A1A"
            borderRadius="20px"
            my="2rem"
            bg="white"
          >
            <Img
              src="./images/dummyImg/DummyProductList.png"
              alt="상품이미지"
            />
            <Flex flexDirection="column" px="1.5rem" pt="1.5rem">
              <Flex gap="5px">
                <Text textStyle="sm_wb">{product.name}</Text>
                <Text textStyle="sm_wn_cg600">{product.capacity}ml</Text>
              </Flex>
              <Flex mt=".7rem">
                <Text textStyle="sl_wb_cp">{product.price}</Text>
                <Text as="span" textStyle="md">
                  원
                </Text>
              </Flex>
              <Flex alignItems="center" gap="3px">
                <RatingStarIcon color="primary.500" />
                <Text textStyle="sm_wb">{product.avgRate}</Text>
                <Text textStyle="sm_wn_cg700">
                  (리뷰 {product.reviewCount}개)
                </Text>
              </Flex>
              <Flex textStyle="sm_wn_cg700" gap="5px" mt="1rem">
                {product.tags.map((tag) => (
                  <Text key={tag.id}>#{tag.name}</Text>
                ))}
              </Flex>
              <Flex pt="1rem" pb="2rem" gap=".7rem">
                <Button variant="primaryButton" fontSize="md" flexGrow="1">
                  <Link href="/">바로구매</Link>
                </Button>
                <Button variant="whiteButton" fontSize="md" flexGrow="1">
                  <Link href="/">장바구니</Link>
                </Button>
              </Flex>
            </Flex>
          </Box>
        ))}
        <ScrollToTop />
      </Container>
    </>
  );
}

export default ProductListPage;
