import Link from 'next/link';

import { Box, Button, Center, Divider, Flex, Text } from '@chakra-ui/react';

import { useGetOrder, useGetOrderStatus } from '@apis/order/OrderApi.query';
import { OrderGetStatus } from '@apis/order/OrderApi.type';
import { UserMe } from '@apis/user/userApi.type';

import OrderSection from '@components/PaymentHistoryPage/_fragments/OrderSection';

import { useQueryClient } from '@tanstack/react-query';
import { formatDateDash } from '@utils/format';

/*
각 상태는 관리자페이지에서 수동으로 컨트롤할 수 있음
결제완료(주문취소 O) → 상품준비중(주문취소 X) → 배송중(주문취소 X) → 배송완료(리뷰작성)
### 결제 완료 > 주문 취소 버튼 활성화, 배송완료 > 리뷰작성 버튼 활성화
*/

interface OrderHistorySectionProps {
  orderId: string;
  created: string;
  // orderItem: uniqueObj;
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
  console.log('⭐️order: ', order);

  return (
    <>
      <Box mt="1rem">
        <Divider />
        <Text py="1rem" pl="1rem" textStyle="ss_wb">
          {` [${formatDateDash(created)}] `}
        </Text>
        <Divider />
      </Box>
      {/* order list section */}
      {order.map((order) => (
        <OrderSection
          key={order.productId}
          productId={order.productId}
          count={order.count}
          shippingStatus={orderData?.shippingStatus}
        />
      ))}
      <Flex justifyContent="flex-end" px="1rem">
        {/* 버튼 영역 */}
        {orderData?.status === 'READY' ? (
          <Button w="40%" variant="primaryButton" borderRadius="5px">
            <Link href="/home">
              <Center as="a" w="100%" h="100%">
                주문취소
              </Center>
            </Link>
          </Button>
        ) : (
          <Button w="40%" flexGrow="1" variant="whiteButton" borderRadius="5px">
            <Link href="/review-write">
              <Center as="a" w="100%" h="100%">
                리뷰작성
              </Center>
            </Link>
          </Button>
        )}
      </Flex>
    </>
  );
}

export default OrderHistorySection;
