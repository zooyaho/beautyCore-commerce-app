import React from 'react';

import {
  Box,
  Button,
  Center,
  CircularProgress,
  Divider,
  Flex,
  Text,
} from '@chakra-ui/react';

import { useGetOrderStatus } from '@apis/order/OrderApi.query';
import { useGetUserMe } from '@apis/user/userApi.query';

import { LAYOUT } from '@constants/layout';

import OrderHistorySection from './_fragments/OrderHistorySection';

import { RightArrowIcon } from 'generated/icons/MyIcons';

export interface uniqueObj {
  [key: string]: string;
}

function OrderHistoryPage() {
  const { data: userData } = useGetUserMe();
  const { data: orderList, isLoading } = useGetOrderStatus(
    userData?.id as number,
    userData,
  );
  const uniqueObj: uniqueObj = {};
  orderList?.results.forEach((order) => {
    if (!uniqueObj.hasOwnProperty.call(uniqueObj, order.orderId))
      // if (!Object.hasOwn(uniqueObj, order.orderId))
      uniqueObj[order.orderId] = order.created;
  });
  const uniqueKeys = Object.keys(uniqueObj);
  const uniqueValues = Object.values(uniqueObj);

  return (
    <Box pt={LAYOUT.HEADER.HEIGHT}>
      <Text as="h2" textStyle="sl_wb" mt="1.6rem" px="1rem">
        주문내역
      </Text>
      <Box mt="3rem">
        {/* s: 주문내역 > 이곳에서 map 돌리기~! */}
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
        <Center>
          <Flex justifyContent="center" alignItems="center" my="3rem" w="70%">
            <Button variant="pageButton">1</Button>
            <Button variant="pageButton">2</Button>
            <Button variant="pageButton">3</Button>
            <Button variant="pageButton">4</Button>
            <Button variant="pageButton">5</Button>
            <Button variant="transparentButton">
              <RightArrowIcon boxSize="10px" ml="1rem" />
            </Button>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
}

export default OrderHistoryPage;
