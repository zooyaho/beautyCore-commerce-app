import { useEffect, useState } from 'react';

import { Divider, Flex, Spacer, Text } from '@chakra-ui/react';

import { ProductDetail } from '@apis/product/ProductAPi.type';
import useAppStore from '@features/useAppStore';

import { useQueryClient } from '@tanstack/react-query';

function TotalPrice() {
  const queryClient = useQueryClient();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const checkedCartList = useAppStore((store) => store.CART.checkedCartList);

  useEffect(() => {
    let totalPrice = 0;
    checkedCartList.forEach((product) => {
      const data: ProductDetail | undefined = queryClient.getQueryData([
        'product',
        product.productId,
      ]);
      totalPrice += (data?.price as number) * product.count;
    });
    if (!checkedCartList.length) {
      setDeliveryFee(0);
    } else if (totalPrice < 30000) {
      setDeliveryFee(3000);
    } else if (totalPrice >= 30000) {
      setDeliveryFee(0);
    }
    setTotalPrice(totalPrice);
  }, [checkedCartList, queryClient]);

  return (
    <>
      <Flex textColor="gray.600" mt="1.3rem">
        <Text>총 상품금액</Text>
        <Spacer />
        <Text>{totalPrice} 원</Text>
      </Flex>
      <Flex textColor="gray.600" mt=".7rem" mb="1.3rem">
        <Text>총 배송비</Text>
        <Spacer />
        <Text>{deliveryFee} 원</Text>
      </Flex>
      <Divider />
      <Flex my="1.3rem">
        <Text>결제금액</Text>
        <Spacer />
        <Text textStyle="sm_wb_cp">{totalPrice + deliveryFee} 원</Text>
      </Flex>
    </>
  );
}

export default TotalPrice;
