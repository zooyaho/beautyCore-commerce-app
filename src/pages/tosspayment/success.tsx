import { useRouter } from 'next/router';

import { Center, CircularProgress } from '@chakra-ui/react';

import { postOrderStatus } from '@apis/order/OrderApi';
import { localOrderListType } from '@apis/order/OrderApi.type';

import { getLocalStorage } from '@utils/localStorage/helper';

const Success = () => {
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
  }
  return (
    <Center h="100vh">
      <CircularProgress isIndeterminate color="primary.500" />
    </Center>
  );
};

export default Success;
