import Link from 'next/link';
import React, { useMemo } from 'react';

import {
  Box,
  Button,
  Center,
  CircularProgress,
  Container,
  Flex,
  Text,
} from '@chakra-ui/react';

import { useGetCart } from '@apis/cart/CartApi.query';

import { LAYOUT } from '@constants/layout';

import CartItem from './_fragments/CartItem';
import SelectSection from './_fragments/SelectSection';
import TotalPrice from './_fragments/TotalPrice';

interface CartPageProps {
  userId?: number;
}

function CartPage({ userId }: CartPageProps) {
  const { data: cartData, isLoading } = useGetCart(userId as number);
  const cartList = useMemo(() => {
    if (cartData) return cartData[0].cartitem;
  }, [cartData]);

  return (
    <>
      {isLoading || !cartData ? (
        <>
          <Center>
            <CircularProgress isIndeterminate color="primary.500" />
          </Center>
        </>
      ) : (
        <>
          <Flex
            justify="space-between"
            pt={LAYOUT.HEADER.HEIGHT}
            px="1rem"
            textColor="gray.600"
          >
            <SelectSection cartQueryData={cartList} />
          </Flex>
          <Box bg="gray.200" pt=".7rem" pb="1.4rem">
            {/* item */}
            {/* {cartQueryData === undefined ? ( */}
            {isLoading ? (
              <Center h="100vh">
                <CircularProgress isIndeterminate color="primary.500" />
              </Center>
            ) : cartList?.length === 0 ? (
              <Center minH="60vh" bgColor="white">
                <Flex flexDirection="column" w="50%">
                  <Text textAlign="center" textStyle="sm_wb">
                    장바구니가 비어있습니다. <br />
                    상품을 추가해 보세요!
                  </Text>
                  <Button variant="primaryButton" size="lg" mt="2rem">
                    <Link href="/product-list">상품보러가기</Link>
                  </Button>
                </Flex>
              </Center>
            ) : (
              cartList?.map((product, index) => {
                return (
                  <CartItem
                    key={product.id}
                    productQueryData={product}
                    index={index}
                  />
                );
              })
            )}
            {/* item */}
          </Box>
          {/* 총 금액 */}
          {cartList?.length !== 0 && (
            <Container>
              <TotalPrice />
              <Button
                variant="primaryButton"
                size="lg"
                mb="3.125rem"
                type="submit"
              >
                결제하기
              </Button>
            </Container>
          )}
        </>
      )}
    </>
  );
}

export default CartPage;
