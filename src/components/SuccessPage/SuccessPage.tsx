import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Center, Flex, Image, ScaleFade, Text } from '@chakra-ui/react';

import { postOrderStatus } from '@apis/order/OrderApi';
import { localOrderListType } from '@apis/order/OrderApi.type';

import {
  getLocalStorage,
  removeLocalStorage,
} from '@utils/localStorage/helper';

function SuccessPage() {
  console.log('👌tosspay success page!!');
  const { query } = useRouter();
  const orderList = getLocalStorage<localOrderListType[]>('order', []);

  if (orderList) {
    orderList.map(async (order) => {
      await postOrderStatus({
        orderId: query.orderId as string,
        productId: order.productId,
        count: order.count,
      });
    });
    removeLocalStorage('order');
  }

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
          src="/images/completePayment.png"
          alt="결제완료 이미지"
          w="100%"
        />
      </ScaleFade>
      <Button variant="primaryButton" size="lg" w="60%" mt="2rem">
        <Link href="/payment-history">
          <Center as="a" w="100%" h="100%">
            결제 내역으로 이동
          </Center>
        </Link>
      </Button>
    </Flex>
  );
}

export default SuccessPage;
