import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Select,
  Text,
} from '@chakra-ui/react';

import { putOrderStatus } from '@apis/order/OrderApi';
import { useGetOrder, useGetOrderStatus } from '@apis/order/OrderApi.query';
import { OrderGetStatus } from '@apis/order/OrderApi.type';
import { UserMe } from '@apis/user/userApi.type';

import OrderSection from '@components/PaymentHistoryPage/_fragments/OrderSection';

import { useQueryClient } from '@tanstack/react-query';
import { formatDateDash, intComma } from '@utils/format';

/*
각 상태는 관리자페이지에서 수동으로 컨트롤할 수 있음
결제완료(주문취소 O) → 상품준비중(주문취소 X) → 배송중(주문취소 X) → 배송완료(리뷰작성)
### 결제 완료 > 주문 취소 버튼 활성화, 배송완료 > 리뷰작성 버튼 활성화
shipping_status(배송상태)를 수정합니다.
{ "PAID": "결제완료", "WAIT": "상품준비중", "INPROGRESS": "배송중", "DONE": "배송완료", "CANCELED": "결제취소" }
*/

interface OrderHistorySectionProps {
  orderId: string;
  created: string;
}

function OrderHistorySection({ orderId, created }: OrderHistorySectionProps) {
  const queryClient = useQueryClient();
  const { data: orderData } = useGetOrder(orderId);
  const userData = queryClient.getQueryData(['user']) as UserMe;
  const orderList = queryClient.getQueryData([
    'order',
    userData.id,
  ]) as OrderGetStatus;
  const order = orderList.results.filter((order) => order.orderId === orderId);
  const [shippingStatus, setShippingStatus] = useState<string>();

  useEffect(() => {
    if (orderData) setShippingStatus(orderData.shippingStatus);
  }, [orderData]);

  const changeShippingStatusHandler = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    await putOrderStatus(orderId, { ['shippingStatus']: e.target.value });
    setShippingStatus(e.target.value);
    queryClient.invalidateQueries({ queryKey: ['order', orderId] });
  };
  return (
    <>
      <Divider mt="1rem" />
      <Flex alignItems="center" justifyContent="space-between">
        <Text py="1rem" pl="1rem" textStyle="ss_wb">
          {` [${formatDateDash(created)}] `}
        </Text>
        <Select
          value={shippingStatus}
          size="sm"
          w="30%"
          onChange={changeShippingStatusHandler}
        >
          <option value="PAID">결제완료</option>
          <option value="WAIT">상품준비중</option>
          <option value="INPROGRESS">배송중</option>
          <option value="DONE">배송완료</option>
          <option value="CANCELED">결제취소</option>
        </Select>
      </Flex>
      <Divider />
      {/* order list section */}
      {order.map((order) => (
        <OrderSection
          key={order.productId}
          productId={order.productId}
          count={order.count}
        />
      ))}
      <Flex px="1rem" justifyContent="flex-end" gap="2rem" my="1rem">
        <Text textStyle="sm_wn_cg700">결제금액</Text>
        <Text textStyle="sm_wb_cp">
          {orderData && intComma(orderData.amount)} 원
        </Text>
      </Flex>
      <Flex justifyContent="flex-end" px="1rem" mb="3rem">
        {/* 버튼 영역 */}
        {shippingStatus === 'PAID' ? (
          <Button w="40%" h="2.5rem" variant="primaryButton" borderRadius="5px">
            <Link href="/home">
              <Center as="a" w="100%" h="100%">
                주문취소
              </Center>
            </Link>
          </Button>
        ) : shippingStatus === 'DONE' ? (
          <Button w="40%" h="2.5rem" variant="whiteButton" borderRadius="5px">
            <Link href="/review-write">
              <Center as="a" w="100%" h="100%">
                리뷰작성
              </Center>
            </Link>
          </Button>
        ) : (
          ''
        )}
      </Flex>
    </>
  );
}

export default OrderHistorySection;
