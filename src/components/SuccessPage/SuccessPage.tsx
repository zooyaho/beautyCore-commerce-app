import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Button, Flex, Image, ScaleFade, Text } from '@chakra-ui/react';

import { deleteCartItem } from '@apis/cart/CartApi';
import { postOrderStatus } from '@apis/order/OrderApi';
import { localOrderListType } from '@apis/order/OrderApi.type';

import {
  getLocalStorage,
  removeLocalStorage,
} from '@utils/localStorage/helper';

function SuccessPage() {
  console.log('👌tosspay success page!!');
  const { query, push } = useRouter();
  const orderList = getLocalStorage<localOrderListType[]>('order', []);

  useEffect(() => {
    if (orderList && query.orderId) {
      orderList.map(async (order) => {
        await postOrderStatus({
          orderId: query.orderId as string,
          productId: order.productId,
          count: order.count,
        });
        if (order.id) await deleteCartItem(order.id);
      });
      removeLocalStorage('order');
    }
  }, [orderList, query.orderId]);

  return (
    <Flex
      h="70vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text as="h2" fontSize="24px" fontWeight="bold" mb="2rem">
        결제가 완료되었습니다
      </Text>
      <ScaleFade initialScale={0.9} in={true}>
        <Image
          src="/icons/completePayment.png"
          alt="결제완료 이미지"
          w="100%"
        />
      </ScaleFade>
      <Button
        variant="primaryButton"
        size="lg"
        w="60%"
        mt="2rem"
        onClick={() => {
          push({
            pathname: '/payment-history',
            query: { orderId: query.orderId },
          });
        }}
      >
        결제 내역으로 이동
      </Button>
    </Flex>
  );
}

export default SuccessPage;
