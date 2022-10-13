import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { Box, Button, Container, Flex, Img, Text } from '@chakra-ui/react';

import instance from '@apis/_axios/instance';

import ScrollToTop from '@components/common/ScrollToTop';

import { LAYOUT } from '@constants/layout';
import { useInfiniteQuery } from '@tanstack/react-query';

import { RatingStarIcon } from 'generated/icons/MyIcons';

// interface ProductListPageProps extends ChakraProps {}
interface ITags {
  id: number;
  name: string;
}

interface ProductList {
  next: string;
  previous: string;
  results: Product[];
  cursor: string;
}
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  tags: ITags[];
  avgRate: number;
  reviewCount: number;
  created: Date;
  thumbnail: string;
}

async function getProductList(cursor: string): Promise<ProductList> {
  const { data } = await instance.get(
    cursor
      ? `/v1/product/?cursor=${cursor}&?page_size=10`
      : `/v1/product/?page_size=10`,
  );
  return data;
}

function ProductListPage() {
  const router = useRouter();
  const {
    data: productListData,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ['product-list'],
    ({ pageParam }) => {
      return getProductList(pageParam);
    },
    {
      getNextPageParam: (lastPage, allPage) => lastPage.cursor || undefined,
    },
  );
  return (
    <>
      {isFetching && (
        <h3 style={{ position: 'fixed', top: '5px', right: '5px' }}>
          Fetching...
        </h3>
      )}
      <InfiniteScroll
        loadMore={() => {
          fetchNextPage();
        }}
        hasMore={hasNextPage}
      >
        <Container pt={LAYOUT.HEADER.HEIGHT} pb="1.5rem" bg="gray.100">
          {productListData &&
            productListData.pages.map((productList) =>
              productList.results.map((product) => {
                return (
                  <Box
                    key={product.id}
                    boxShadow="0 0 10px #1A1A1A1A"
                    borderRadius="20px"
                    my="2rem"
                    bg="white"
                    onClick={() => router.push(`/product-list/${product.id}`)}
                  >
                    <Img
                      src="./images/dummyImg/DummyProductList.png"
                      alt="상품이미지"
                    />
                    <Flex flexDirection="column" px="1.5rem" pt="1.5rem">
                      <Flex gap="5px">
                        <Text textStyle="sm_wb">{product.name}</Text>
                        <Text textStyle="sm_wn_cg600">
                          {product.capacity}ml
                        </Text>
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
                        <Button
                          variant="primaryButton"
                          fontSize="md"
                          flexGrow="1"
                        >
                          <Link href="/">바로구매</Link>
                        </Button>
                        <Button
                          variant="whiteButton"
                          fontSize="md"
                          flexGrow="1"
                        >
                          <Link href="/">장바구니</Link>
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                );
              }),
            )}
          <ScrollToTop />
        </Container>
      </InfiniteScroll>
    </>
  );
}

export default ProductListPage;
