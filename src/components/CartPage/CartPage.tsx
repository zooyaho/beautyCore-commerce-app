import Link from 'next/link';
import React, { useEffect, useMemo } from 'react';

import {
  Box,
  Button,
  Center,
  CircularProgress,
  Container,
  Flex,
  Text,
} from '@chakra-ui/react';

import {
  usePatchCartItemMutation,
  usePostCartItemMutation,
  usePostCartMutation,
} from '@apis/cart/CartApi.mutation';
import { useGetCart } from '@apis/cart/CartApi.query';
import useAppStore from '@features/useAppStore';

import { LAYOUT } from '@constants/layout';
import { useQueryClient } from '@tanstack/react-query';

import CartItem from './_fragments/CartItem';
import SelectSection from './_fragments/SelectSection';
import TotalPrice from './_fragments/TotalPrice';

interface CartPageProps {
  userId?: number;
}

function CartPage({ userId }: CartPageProps) {
  const { data: cartData, isLoading } = useGetCart(userId as number);
  const { mutate: postCartMutate } = usePostCartMutation();
  const { mutate: postCartItemMutate } = usePostCartItemMutation();
  const { mutate: patchCartItemMutate } = usePatchCartItemMutation();

  const storeCartList = useAppStore((store) => store.CART.productList);
  const queryClient = useQueryClient();
  console.log('store cart list: ', storeCartList);
  console.log('cartData: ', cartData);

  const cartList = useMemo(() => {
    if (cartData) return cartData[0].cartitem;
  }, [cartData]);

  useEffect(() => {
    try {
      /* 1️⃣ 카트 이동 버튼, 카트 아이콘 버튼 클릭 시 실행 */
      console.log('⭐️cartList: ', cartList);
      if (!cartData && userId) postCartMutate(userId); // user initial cart id post요청
      if (cartList && cartData && !cartList.length) {
        // store의 cart list 서버 post요청
        storeCartList.forEach((product) => {
          postCartItemMutate(
            {
              productId: product.productId,
              cartId: cartData[0].id,
              count: product.productQuantity,
            },
            {
              onSuccess: () => {
                queryClient.invalidateQueries(['cart']);
              },
            },
          );
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, [
    cartData,
    cartList,
    storeCartList,
    postCartItemMutate,
    postCartMutate,
    queryClient,
    userId,
  ]);

  useEffect(() => {
    if (cartData) {
      // 새로운 제품 장바구니에 추가(post)
      const addPostCartRes = storeCartList.filter((storeP) => {
        let flag = true;
        cartList?.forEach((queryP) => {
          if (queryP.productId === storeP.productId) flag = false;
        });
        return flag;
      });
      // console.log('🔥addPostCartRes: ', addPostCartRes);
      if (addPostCartRes.length) {
        console.log('post cart item 실행(추가)');
        addPostCartRes.forEach((product) => {
          postCartItemMutate({
            productId: product.productId,
            cartId: cartData[0].id,
            count: product.productQuantity,
          });
        });
      }
      // cart에 담겨있는 제품은 수량 비교해서 업데이트(patch)
      const updatePatchCartRes = storeCartList.filter((storeP) => {
        let flag = false;
        cartList?.forEach((queryP) => {
          if (
            queryP.productId === storeP.productId &&
            storeP.productQuantity !== queryP.count
          )
            flag = true;
        });
        return flag;
      });
      const addCartProductId = updatePatchCartRes.map((updateP) => {
        const queryP = cartList?.find((queryP) => {
          return queryP.productId === updateP.productId;
        });
        return { ...updateP, id: queryP?.id };
      });
      // console.log('🤮updatePatchCartRes: ', addCartProductId);
      if (addCartProductId.length) {
        console.log('patch cart item 실행(업데이트)');
        addCartProductId.forEach((product) => {
          patchCartItemMutate({
            id: product.id,
            count: product.productQuantity,
          });
        });
      }
    }
  }, [
    cartData,
    cartList,
    storeCartList,
    patchCartItemMutate,
    postCartItemMutate,
  ]);

  return (
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
          <Button variant="primaryButton" size="lg" mb="3.125rem" type="submit">
            결제하기
          </Button>
        </Container>
      )}
    </>
  );
}

export default CartPage;
