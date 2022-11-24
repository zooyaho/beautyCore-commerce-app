import React, { useCallback } from 'react';

import { Box, Center, CircularProgress, Divider, Text } from '@chakra-ui/react';

import { getOrderStatus } from '@apis/order/OrderApi';
import { useGetOrderStatus } from '@apis/order/OrderApi.query';
import { useGetUserMe } from '@apis/user/userApi.query';

import Pagination from '@components/common/Pagination';

import { LAYOUT } from '@constants/layout';
import { useQueryClient } from '@tanstack/react-query';

import OrderHistorySection from './_fragments/OrderHistorySection';

export interface uniqueObj {
  [key: string]: string;
}

function OrderHistoryPage() {
  const queryClient = useQueryClient();
  const { data: userData } = useGetUserMe();
  const { data: orderList, isLoading } = useGetOrderStatus(
    1,
    userData,
    userData?.id,
  );
  const uniqueObj: uniqueObj = {};
  orderList?.results.forEach((order) => {
    if (!uniqueObj.hasOwnProperty.call(uniqueObj, order.orderId))
      uniqueObj[order.orderId] = order.created;
  });
  const uniqueKeys = Object.keys(uniqueObj);
  const uniqueValues = Object.values(uniqueObj);

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
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
        주문내역
      </Text>
      <Box mt="3rem">
        {isLoading || !orderList ? (
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
        {/* e: 주문내역 */}
        <Divider mt="1rem" />
        {orderList && (
          <Pagination
            page={Math.ceil(orderList.count / 5)}
            getListHandler={getOrderListHandler}
          />
        )}
      </Box>
    </Box>
  );
}

export default OrderHistoryPage;
