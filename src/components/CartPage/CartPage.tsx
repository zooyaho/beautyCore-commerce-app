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

import { useGetCart } from '@apis/cart/CartApi.query';
import { CartItem as CartItemType } from '@apis/cart/CartApi.type';
import { ProductDetail } from '@apis/product/ProductAPi.type';
import useAppStore from '@features/useAppStore';

import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';
import { useQueryClient } from '@tanstack/react-query';
import { setLocalStorage } from '@utils/localStorage/helper';
import { UserType, getUser } from '@utils/localStorage/user';

import CartItem from './_fragments/CartItem';
import SelectSection from './_fragments/SelectSection';
import TotalPrice from './_fragments/TotalPrice';

function CartPage() {
  const [userData, setUserData] = useState<UserType | null>();
  useEffect(() => {
    if (typeof window !== undefined) {
      setUserData(getUser());
    }
  }, []);
  const { data: cartData, isLoading } = useGetCart(userData?.user_id as number);
  const checkedCartList = useAppStore((store) => store.CART.checkedCartList);
  const queryClient = useQueryClient();
  const checkedProductList = useMemo(() => {
    if (checkedCartList)
      return checkedCartList.map((product) => {
        return queryClient.getQueryData(['product', product.productId]);
      });
  }, [checkedCartList, queryClient]) as ProductDetail[];
  const cartList = useMemo(() => {
    if (cartData && !!cartData.length) return cartData[0].cartitem;
  }, [cartData]);

  const setStorageOrderListHandler = () => {
    const setOrderList = checkedCartList.map((product, index) => {
      if (checkedProductList && checkedProductList.length) {
        const orderItem = cartList?.find(
          (cartProduct) => cartProduct.productId === product.productId,
        ) as CartItemType;
        return {
          id: orderItem.id,
          productId: product.productId,
          name: checkedProductList[index].name,
          photo: checkedProductList[index].photo,
          capacity: checkedProductList[index].capacity,
          price: checkedProductList[index].price,
          count: product.count,
        };
      }
    });
    console.log('⭐️setOrderList: ', setOrderList);
    setLocalStorage('order', setOrderList);
  };

  return (
    <>
      {isLoading || !cartList ? (
        <>
          <Center pt={LAYOUT.HEADER.HEIGHT} minH="80vh">
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
            {cartList.length === 0 ? (
              <Center minH="60vh" bgColor="white">
                <Flex flexDirection="column" w="50%">
                  <Text textAlign="center" textStyle="sm_wb">
                    장바구니가 비어있습니다. <br />
                    상품을 추가해 보세요!
                  </Text>
                  <Button variant="primaryButton" size="lg" mt="2rem">
                    <Link href="/product-list">
                      <Center as="a" w="100%" h="100%">
                        상품보러가기
                      </Center>
                    </Link>
                  </Button>
                </Flex>
              </Center>
            ) : (
              cartList.map((product, index) => {
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
          {cartList.length !== 0 && (
            <Container>
              <TotalPrice />
              <Button
                variant="primaryButton"
                size="lg"
                mb="3.125rem"
                onClick={setStorageOrderListHandler}
              >
                <Link href={ROUTES.ORDER}>
                  <Center as="a" w="100%" h="100%">
                    결제하기
                  </Center>
                </Link>
              </Button>
            </Container>
          )}
        </>
      )}
      {!userData && <AuthRouteModal authStatus={AUTH_STATUS.LOGOUT} />}
    </>
  );
}

export default CartPage;
