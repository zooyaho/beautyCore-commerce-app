import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  Center,
  ChakraProps,
  Container,
  Flex,
  Img,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { getProductList } from '@apis/product/ProductApi';
import { cartSliceAction } from '@features/cart/cartSlice';

import { RatingStarIcon } from '@components/common/@Icons/MyIcons';
import CartDrawer from '@components/common/CartDrawer';
import ScrollToTop from '@components/common/ScrollToTop';

import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';
import { useInfiniteQuery } from '@tanstack/react-query';
import { intComma } from '@utils/format';
import { setLocalStorage } from '@utils/localStorage/helper';

import { Product, ProductList } from '../../apis/product/ProductAPi.type';

interface ProductListPageProps extends ChakraProps {
  productListData: ProductList;
}

function ProductListPage({ productListData }: ProductListPageProps) {
  const router = useRouter();
  const { cursor } = productListData;
  const [uniqueProductList, setUniqueProductList] = useState<Product[]>(
    productListData.results,
  );
  const {
    data: productListDataQuery,
    hasNextPage, // 수집할 데이터가 더 있는지를 결정하는 불리언값
    fetchNextPage, // 어느 함수를 실행할지를 infiniteScroll에 지시한다.
  } = useInfiniteQuery(
    ['product-list'],
    ({ pageParam = cursor }) => {
      return getProductList(pageParam);
    },
    {
      getNextPageParam: (lastPage) => lastPage.cursor || undefined, // 다음 페이지로 가는 방식을 정의하는 함수
    },
  );

  useEffect(() => {
    const addProductList = productListData.results;
    if (productListDataQuery) {
      productListDataQuery.pages.forEach((page) => {
        addProductList.push(...page.results);
      });
      setUniqueProductList(
        addProductList.filter((product, index) => {
          return addProductList.indexOf(product) === index;
        }),
      );
    }
  }, [productListDataQuery, productListData.results]);

  const { onOpen, isOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const setStorageOrderListHandler = (product: Product) => {
    setLocalStorage('order', [
      {
        productId: product.id,
        name: product.name,
        photo: product.thumbnail,
        capacity: product.capacity,
        price: product.price,
        count: 1,
      },
    ]);
  };

  return (
    <>
      <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
        <Container pt={LAYOUT.HEADER.HEIGHT} pb="1.5rem" bg="gray.100">
          {uniqueProductList.map((product) => {
            return (
              <Box
                key={product.id}
                boxShadow="0 0 10px #1A1A1A1A"
                borderRadius="20px"
                mb="2rem"
                bg="white"
              >
                <Box
                  px="1.5rem"
                  pt="1.5rem"
                  cursor="pointer"
                  onClick={() => {
                    router.push({
                      pathname: `/product-list/${product.id}`,
                      query: {
                        tagName: product.tag[product.tag.length - 1].name,
                      },
                    });
                  }}
                >
                  <Center pb="1rem">
                    <Img
                      maxW="100%"
                      minW="60%"
                      src={product.thumbnail}
                      alt="상품이미지"
                    />
                  </Center>
                  <Flex gap="5px">
                    <Text textStyle="sm_wb">{product.name}</Text>
                    <Text textStyle="sm_wn_cg600">{product.capacity}ml</Text>
                  </Flex>
                  <Flex mt=".7rem">
                    <Text textStyle="sl_wb_cp">{intComma(product.price)}</Text>
                    <Text as="span" textStyle="md">
                      원
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap="3px">
                    <RatingStarIcon color="primary.500" />
                    <Text textStyle="sm_wb">
                      {product.avgRate ? product.avgRate.toFixed(1) : 0}
                    </Text>
                    <Text textStyle="sm_wn_cg700">
                      (리뷰 {product.reviewCount}개)
                    </Text>
                  </Flex>
                  <Flex textStyle="sm_wn_cg700" gap="5px" mt="1rem">
                    {product.tag &&
                      product.tag.map((tag) => (
                        <Text key={tag.id}>#{tag.name}</Text>
                      ))}
                  </Flex>
                </Box>
                <Flex pt="1rem" pb="2rem" gap=".7rem" px="1.5rem">
                  <Button
                    variant="primaryButton"
                    fontSize="md"
                    flexGrow="1"
                    onClick={() => setStorageOrderListHandler(product)}
                  >
                    <Link href={ROUTES.ORDER}>
                      <Center as="a" w="100%" h="100%">
                        바로구매
                      </Center>
                    </Link>
                  </Button>
                  <Button
                    variant="whiteButton"
                    fontSize="md"
                    flexGrow="1"
                    onClick={() => {
                      dispatch(
                        cartSliceAction.addProductList({
                          productId: product.id,
                          name: product.name,
                          price: product.price,
                          productQuantity: 1,
                        }),
                      );
                      onOpen();
                    }}
                  >
                    장바구니
                  </Button>
                </Flex>
              </Box>
            );
          })}
          <ScrollToTop />
        </Container>
        <CartDrawer isOpen={isOpen} onClose={onClose} />
      </InfiniteScroll>
    </>
  );
}

export default ProductListPage;
