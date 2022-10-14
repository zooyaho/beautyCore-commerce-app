import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import {
  Box,
  Button,
  ChakraProps,
  Container,
  Flex,
  Img,
  Text,
} from '@chakra-ui/react';

import { getProductList } from '@apis/product/ProductApi';

import ScrollToTop from '@components/common/ScrollToTop';

import { LAYOUT } from '@constants/layout';
import { useInfiniteQuery } from '@tanstack/react-query';

import { ProductList } from '../../apis/product/ProductAPi.type';

import { RatingStarIcon } from 'generated/icons/MyIcons';

interface ProductListPageProps extends ChakraProps {
  productListData: ProductList;
}

function ProductListPage({ productListData }: ProductListPageProps) {
  const { cursor } = productListData;
  const router = useRouter();
  const {
    data: productListDataQuery,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ['product-list'],
    ({ pageParam = cursor }) => {
      return getProductList(pageParam);
    },
    {
      getNextPageParam: (lastPage) => lastPage.cursor || undefined,
    },
  );
  return (
    <>
      <InfiniteScroll
        loadMore={() => {
          fetchNextPage();
        }}
        hasMore={hasNextPage}
      >
        <Container pt={LAYOUT.HEADER.HEIGHT} pb="1.5rem" bg="gray.100">
          {productListData.results.map((product) => {
            return (
              <Box
                key={product.id}
                boxShadow="0 0 10px #1A1A1A1A"
                borderRadius="20px"
                my="2rem"
                bg="white"
                onClick={() => router.push(`/product-list/${product.id}`)}
              >
                <Img src={product.thumbnail} alt="상품이미지" />
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
            );
          })}
          {productListDataQuery &&
            productListDataQuery.pages.map((productList) =>
              productList.results.map((product) => (
                <Box
                  key={product.id}
                  boxShadow="0 0 10px #1A1A1A1A"
                  borderRadius="20px"
                  my="2rem"
                  bg="white"
                  onClick={() => router.push(`/product-list/${product.id}`)}
                >
                  <Img src={product.thumbnail} alt="상품이미지" />
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
                      <Button
                        variant="primaryButton"
                        fontSize="md"
                        flexGrow="1"
                      >
                        <Link href="/">바로구매</Link>
                      </Button>
                      <Button variant="whiteButton" fontSize="md" flexGrow="1">
                        <Link href="/">장바구니</Link>
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
              )),
            )}
          <ScrollToTop />
        </Container>
      </InfiniteScroll>
    </>
  );
}

export default ProductListPage;
