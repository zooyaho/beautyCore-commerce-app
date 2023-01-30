import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

import {
  Box,
  Button,
  Center,
  CircularProgress,
  Divider,
  Flex,
  Text,
} from '@chakra-ui/react';

import { getOrderStatus } from '@apis/order/OrderApi';
import { useGetOrderStatus } from '@apis/order/OrderApi.query';
import { useGetUserMe } from '@apis/user/userApi.query';

import AuthRouteModal from '@components/common/AuthRouteModal';
import Pagination from '@components/common/Pagination';

import { AUTH_STATUS } from '@constants/authStatus';
import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';
import { useQueryClient } from '@tanstack/react-query';
import { UserType, getUser } from '@utils/localStorage/user';

import OrderHistorySection from './_fragments/OrderHistorySection';

export interface uniqueObj {
  [key: string]: string;
}

function OrderHistoryPage() {
  const queryClient = useQueryClient();
  const { data: userData } = useGetUserMe();
  const { data: orderList, isLoading } = useGetOrderStatus(1, userData);
  const uniqueObj: uniqueObj = {};
  console.log(orderList);
  orderList?.results.forEach((order) => {
    if (!uniqueObj.hasOwnProperty.call(uniqueObj, order.orderId))
      uniqueObj[order.orderId] = order.created;
  });
  const uniqueKeys = Object.keys(uniqueObj);
  const uniqueValues = Object.values(uniqueObj);
  const [userStatus, setUserStatus] = useState<UserType | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setUserStatus(getUser());
    }
  }, []);

  const getOrderListHandler = useCallback(
    async (currentPage: number) => {
      if (userData) {
        const orderData = await getOrderStatus(currentPage, userData.id);
        queryClient.setQueryData(['order', userData.id], orderData);
      }
    },
    [queryClient, userData],
  );

  return (
    <>
      {!userStatus ? (
        <AuthRouteModal authStatus={AUTH_STATUS.LOGOUT} />
      ) : (
        <Box pt={LAYOUT.HEADER.HEIGHT}>
          <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
            주문내역
          </Text>
          <Box mt="3rem">
            {Object.keys(uniqueObj).length === 0 ? (
              <Center minH="40vh" bgColor="white">
                <Flex flexDirection="column" w="50%">
                  <Text textAlign="center" textStyle="sm_wb">
                    주문내역이 비어있습니다. <br />
                    상품을 구입해보세요!
                  </Text>
                  <Button variant="primaryButton" size="lg" mt="2rem">
                    <Link href={ROUTES.PRODUCT_LIST}>
                      <Center as="a" w="100%" h="100%">
                        상품보러가기
                      </Center>
                    </Link>
                  </Button>
                </Flex>
              </Center>
            ) : isLoading || !orderList ? (
              <Center h="100vh">
                <CircularProgress isIndeterminate color="primary.500" />
              </Center>
            ) : (
              Array(Object.keys(uniqueObj).length)
                .fill(0)
                .map((_v, i) => (
                  <OrderHistorySection
                    key={i}
                    orderId={uniqueKeys[i]}
                    created={uniqueValues[i]}
                  />
                ))
            )}
            <Divider mt="1rem" />
            {orderList && (
              <Pagination
                page={Math.ceil(orderList.count / 5)}
                getListHandler={getOrderListHandler}
              />
            )}
          </Box>
        </Box>
      )}
    </>
  );
}

export default OrderHistoryPage;
