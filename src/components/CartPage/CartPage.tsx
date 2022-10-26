import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Img,
  Spacer,
  Text,
} from '@chakra-ui/react';

import {
  useGetCartMutation,
  usePatchCartItemMutation,
  usePostCartItemMutation,
  usePostCartMutation,
} from '@apis/cart/CartApi.mutation';
import { useGetCart } from '@apis/cart/CartApi.query';
import { Cart } from '@apis/cart/CartApi.type';
import useAppStore from '@features/useAppStore';

import { LAYOUT } from '@constants/layout';
import { useQueryClient } from '@tanstack/react-query';

import {
  CloseButtonIcon,
  MinusCartButtonIcon,
  PlusCartButtonIcon,
} from 'generated/icons/MyIcons';

interface CartPageProps {
  userId?: number;
}

function CartPage({ userId }: CartPageProps) {
  const cartData = useGetCart(userId as number);
  // const { mutate: getCartMutate } = useGetCartMutation();
  const { mutate: postCartMutate } = usePostCartMutation();
  const { mutateAsync: postCartItemMutate } = usePostCartItemMutation();
  const { mutateAsync: patchCartItemMutate } = usePatchCartItemMutation();

  const queryClient = useQueryClient();
  const [cartId, setCartId] = useState<number>();
  const cartProductList = useAppStore((store) => store.CART.productList);
  const cartQueryData = queryClient.getQueryData(['cart']) as Cart[];
  console.log('store cart list: ', cartProductList);

  useEffect(() => {
    try {
      // console.log(
      //   'cartData, userId, cartQueryData[0].cartitem: ',
      //   cartData,
      //   userId,
      //   cartQueryData[0].cartitem,
      // );
      if (!cartData && !cartQueryData[0].cartitem.length) {
        console.log('post cart 실행!!!!!!!!!!!');
        if (userId) postCartMutate(userId);
        cartProductList.forEach((product) => {
          console.log(product);
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
    if (cartQueryData) setCartId(cartQueryData[0].id);
  }, [
    cartData,
    cartId,
    cartProductList,
    cartQueryData,
    postCartItemMutate,
    postCartMutate,
    userId,
  ]);

  useEffect(() => {
    // 새로운 제품 장바구니에 추가(post)
    const addPostCartRes = cartProductList.filter((storeP) => {
      let flag = true;
      cartQueryData[0].cartitem.forEach((queryP) => {
        if (queryP.productId === storeP.productId) flag = false;
      });
      return flag;
    });
    console.log('🔥addPostCartRes: ', addPostCartRes);
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
      cartQueryData[0].cartitem.forEach((queryP) => {
        if (
          queryP.productId === storeP.productId &&
          storeP.productQuantity !== queryP.count
        )
          flag = true;
      });
      return flag;
    });
    const addCartProductId = updatePatchCartRes.map((updateP) => {
      const queryP = cartQueryData[0].cartitem.find((queryP) => {
        return queryP.productId === updateP.productId;
      });
      return { ...updateP, id: queryP?.id };
    });
    console.log('🤮updatePatchCartRes: ', addCartProductId);
    if (addCartProductId.length) {
      console.log('patch cart item 실행(업데이트)');
      addCartProductId.forEach((product) => {
        patchCartItemMutate({
          id: product.id,
          count: product.productQuantity,
        });
      });
    }
  }, [
    cartId,
    cartProductList,
    cartQueryData,
    patchCartItemMutate,
    postCartItemMutate,
  ]);
  /* 
  <Center minH="65vh">
      <Flex pt={LAYOUT.HEADER.HEIGHT} flexDirection="column" w="50%">
        <Text textAlign="center" textStyle="sm_wb">
          장바구니가 비어있습니다. <br />
          상품을 추가해 보세요!
        </Text>
        <Button variant="primaryButton" size="lg" mt="2rem">
          <Link href="product-list">상품보러가기</Link>
        </Button>
      </Flex>
    </Center>
   */

  return (
    <>
      <Flex
        justify="space-between"
        pt={LAYOUT.HEADER.HEIGHT}
        px="1rem"
        textColor="gray.600"
      >
        <Flex pb=".7rem">
          <Checkbox alignSelf="center" colorScheme="primary" size="lg">
            <Text as="span" textStyle="md">
              모두선택
            </Text>
          </Checkbox>
        </Flex>
        <Button variant="transparentButton">
          <Text as="span" textStyle="md">
            선택삭제
          </Text>
        </Button>
      </Flex>
      <Box bg="gray.200" pt=".7rem" pb="1.4rem">
        {/* item */}
        <Container bg="white" mt=".7rem" py="1rem">
          <Flex>
            <Checkbox
              alignSelf="flex-start"
              colorScheme="primary"
              size="lg"
              mr=".7rem"
            />
            <Box w="100%">
              <Flex w="100%">
                <Flex>
                  <Img mr=".7rem" src="/images/dummyImg/상품이미지.png" />
                  <Box textStyle="md">
                    <Text fontWeight="700">바스 &amp; 샴푸</Text>
                    <Text textColor="gray.600">바스 &amp; 샴푸 | 120ml</Text>
                    <Text textColor="primary.500" fontWeight="700">
                      27,000원
                    </Text>
                  </Box>
                </Flex>
                <Spacer />
                <Button variant="transparentButton" pr="0" h="1rem">
                  <CloseButtonIcon boxSize="12px" />
                </Button>
              </Flex>
              <Box bg="gray.200" borderRadius="5px" my="1rem" p=".7rem">
                <Text textStyle="sm_wn_cg600">바스 &amp; 샴푸</Text>
                <Flex mt=".3rem">
                  <Flex
                    bg="white"
                    border="1px solid #EAECF0"
                    borderRadius="5px"
                    h="25px"
                  >
                    <Button variant="transparentButton" w="1.5rem" h="1.5rem">
                      <MinusCartButtonIcon boxSize="25px" />
                    </Button>
                    <Text
                      w="25px"
                      textAlign="center"
                      textStyle="sm"
                      lineHeight="25px"
                      borderLeft="1px solid #EAECF0"
                      borderRight="1px solid #EAECF0"
                    >
                      2
                    </Text>
                    <Button variant="transparentButton" w="1.5rem" h="1.5rem">
                      <PlusCartButtonIcon boxSize="25px" />
                    </Button>
                  </Flex>
                  <Spacer />
                  <Text textStyle="sm_wb_cg600">54,000원</Text>
                </Flex>
              </Box>
              <Flex>
                <Text textStyle="md">배송비 무료</Text>
                <Spacer />
                <Text textStyle="sl_wb">54,000원</Text>
              </Flex>
            </Box>
          </Flex>
        </Container>
        {/* item */}
      </Box>
      {/* 총 금액 */}
      <Container>
        <Flex textColor="gray.600" mt="1.3rem">
          <Text>총 상품금액</Text>
          <Spacer />
          <Text>108,000 원</Text>
        </Flex>
        <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
          <Text>총 배송비</Text>
          <Spacer />
          <Text>0 원</Text>
        </Flex>
        <Divider />
        <Flex my="1.3rem">
          <Text>결제금액</Text>
          <Spacer />
          <Text textStyle="sm_wb_cp">108,000 원</Text>
        </Flex>
        <Button variant="primaryButton" size="lg" mb="3.125rem" type="submit">
          결제하기
        </Button>
      </Container>
    </>
  );
}

export default CartPage;
