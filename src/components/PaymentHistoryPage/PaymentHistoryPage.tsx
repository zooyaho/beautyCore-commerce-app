import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { useGetOrder, useGetOrderStatus } from '@apis/order/OrderApi.query';
import { useGetUserMe } from '@apis/user/userApi.query';

import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';
import { formatDateDash, formatPhoneDash, intComma } from '@utils/format';

import OrderSection from './_fragments/OrderSection';

function PaymentHistoryPage() {
  const { query } = useRouter();
  const { data: userData } = useGetUserMe();
  const { data: orderData } = useGetOrder(query.orderId as string);
  const { data: orderList } = useGetOrderStatus(
    userData?.id as number,
    userData,
  );
  const paymentList = orderList?.results.filter(
    (order) => query.orderId === order.orderId,
  );
  /* const productList = useMemo(async () => {
    if (paymentList) {
      return await Promise.all(
        paymentList.map(async (order) => {
          const product = await getProduct(order.productId);
          return {
            ...order,
            ...product,
          };
        }),
      );
    }
  }, [paymentList]); */

  return (
    <>
      {orderData && (
        <Box pt={LAYOUT.HEADER.HEIGHT}>
          <Text as="h2" textStyle="lg" fontWeight="bold" mt="1.6rem" px="1rem">
            결제내역
          </Text>
          <Box mt="3rem">
            <Divider />
            <Text py="1rem" pl="1rem" textStyle="sm" fontWeight="700">
              {` [${formatDateDash(orderData.created)}] `}
            </Text>
            <Divider />
            {paymentList &&
              paymentList.map((product) => (
                <OrderSection
                  key={product.id}
                  productId={product.productId}
                  count={product.count}
                  shippingStatus={orderData.shippingStatus}
                />
              ))}
            {/* s: 배송지 정보 */}
            <Box
              borderTop="10px solid #F9F9F9"
              borderBottom="10px solid #F9F9F9"
            >
              <Text as="h3" py=".8rem" pl="1rem" fontWeight="700">
                배송지 정보
              </Text>
              <Divider />
              <Flex flexDirection="column" gap=".7rem" px="1rem" my="1rem">
                <Flex>
                  <Text minW="30%">이름</Text>
                  <Text textColor="gray.700">{orderData.shipName}</Text>
                </Flex>
                <Flex>
                  <Text minW="30%">핸드폰 번호</Text>
                  <Text textColor="gray.700">
                    {formatPhoneDash(orderData.shipPhone)}
                  </Text>
                </Flex>
                <Flex>
                  <Text minW="30%">우편번호</Text>
                  <Text textColor="gray.700">{orderData.shipAddrPost}</Text>
                </Flex>
                <Flex>
                  <Text minW="30%">주소</Text>
                  <Text textColor="gray.700">{orderData.shipAddr}</Text>
                </Flex>
                <Flex>
                  <Text minW="30%">배송요청사항</Text>
                  <Text textColor="gray.700">{orderData.orderMessage}</Text>
                </Flex>
              </Flex>
            </Box>
            {/* e: 배송지 정보 */}
            {/* s: 결제 정보 */}
            <Text as="h3" py=".8rem" pl="1rem" fontWeight="700">
              결제정보
            </Text>
            <Divider />
            <Container textStyle="md" fontWeight="400">
              <Flex textColor="gray.600" mt="1rem">
                <Text>총 상품금액</Text>
                <Spacer />
                <Text>{intComma(orderData.price)} 원</Text>
              </Flex>
              <Flex textColor="gray.600" mt=".7rem">
                <Text>총 배송비</Text>
                <Spacer />
                <Text>
                  {orderData.amount - orderData.price !== 0
                    ? `3,000 원`
                    : '0 원'}
                </Text>
              </Flex>
              <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
                <Text>결제수단</Text>
                <Spacer />
                <Text fontWeight="bole">
                  {orderData.method === 'CARD'
                    ? '신용카드 결제'
                    : '결제 수단 없음'}
                </Text>
              </Flex>
            </Container>
            <Divider />
            <Flex my="1.3rem" px="1rem">
              <Text>결제금액</Text>
              <Spacer />
              <Text textColor="primary.500" fontWeight="700">
                {intComma(orderData.amount)} 원
              </Text>
            </Flex>
            {/* e: 결제 정보 */}
            <Flex p="2rem 1rem" gap=".7rem">
              <Button size="lg" flexGrow="1" variant="whiteButton">
                <Link href={ROUTES.HOME}>
                  <Center as="a" w="100%" h="100%">
                    메인화면 이동
                  </Center>
                </Link>
              </Button>
              <Button size="lg" flexGrow="1" variant="primaryButton">
                <Link href="/order-history">
                  <Center as="a" w="100%" h="100%">
                    주문내역 이동
                  </Center>
                </Link>
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
}

export default PaymentHistoryPage;
