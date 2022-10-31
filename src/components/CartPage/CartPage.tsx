import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

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
import { Cart } from '@apis/cart/CartApi.type';
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
  const cartData = useGetCart(userId as number);
  const { mutate: postCartMutate } = usePostCartMutation();
  const { mutate: postCartItemMutate } = usePostCartItemMutation();
  const { mutate: patchCartItemMutate } = usePatchCartItemMutation();

  const [cartId, setCartId] = useState<number>();
  const cartProductList = useAppStore((store) => store.CART.productList);
  const queryClient = useQueryClient();
  const cartQueryData = queryClient.getQueryData(['cart']) as Cart[];
  // console.log('cartQueryData: ', cartQueryData);
  // console.log('store cart list: ', cartProductList);

  const cartItemList = useMemo(() => {
    if (cartQueryData) return cartQueryData[0].cartitem;
  }, [cartQueryData]);

  useEffect(() => {
    try {
      if (cartItemList && !cartData && !cartItemList.length) {
        if (userId) postCartMutate(userId);
        cartProductList.forEach((product) => {
          postCartItemMutate({
            productId: product.productId,
            cartId: cartId,
            count: product.productQuantity,
          });
        });
      }
    } catch (e) {
      console.error(e);
    }
    if (cartQueryData) {
      setCartId(cartQueryData[0].id);
    }
  }, [
    cartData,
    cartId,
    cartProductList,
    cartQueryData,
    cartItemList,
    postCartItemMutate,
    postCartMutate,
    userId,
  ]);

  useEffect(() => {
    if (cartQueryData) {
      // 새로운 제품 장바구니에 추가(post)
      const addPostCartRes = cartProductList.filter((storeP) => {
        let flag = true;
        cartItemList?.forEach((queryP) => {
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
            cartId: cartId,
            count: product.productQuantity,
          });
        });
      }
      // cart에 담겨있는 제품은 수량 비교해서 업데이트(patch)
      const updatePatchCartRes = cartProductList.filter((storeP) => {
        let flag = false;
        cartItemList?.forEach((queryP) => {
          if (
            queryP.productId === storeP.productId &&
            storeP.productQuantity !== queryP.count
          )
            flag = true;
        });
        return flag;
      });
      const addCartProductId = updatePatchCartRes.map((updateP) => {
        const queryP = cartItemList?.find((queryP) => {
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
    cartId,
    cartItemList,
    cartProductList,
    cartQueryData,
    patchCartItemMutate,
    postCartItemMutate,
  ]);

  /* checked cart list */

  return (
    <>
      <Flex
        justify="space-between"
        pt={LAYOUT.HEADER.HEIGHT}
        px="1rem"
        textColor="gray.600"
      >
        <SelectSection cartQueryData={cartItemList} />
      </Flex>
      <Box bg="gray.200" pt=".7rem" pb="1.4rem">
        {/* item */}
        {cartQueryData === undefined ? (
          <Center h="100vh">
            <CircularProgress isIndeterminate color="primary.500" />
          </Center>
        ) : cartQueryData.length === 0 ? (
          <Center minH="65vh">
            <Flex pt={LAYOUT.HEADER.HEIGHT} flexDirection="column" w="50%">
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
          cartItemList?.map((product, index) => {
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
      <Container>
        <TotalPrice />
        <Button variant="primaryButton" size="lg" mb="3.125rem" type="submit">
          결제하기
        </Button>
      </Container>
    </>
  );
}

export default CartPage;
