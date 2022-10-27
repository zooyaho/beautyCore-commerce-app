import { useEffect, useState } from 'react';

import { Divider, Flex, Spacer, Text } from '@chakra-ui/react';

import { Cart } from '@apis/cart/CartApi.type';
import { ProductDetail } from '@apis/product/ProductAPi.type';

import { useQueryClient } from '@tanstack/react-query';

function TotalPrice() {
  const queryClient = useQueryClient();
  const cartQueryData: Cart[] | undefined = queryClient.getQueryData(['cart']);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let totalPrice = 0;
    cartQueryData?.[0].cartitem.forEach((product) => {
      const data: ProductDetail | undefined = queryClient.getQueryData([
        'product',
        product.productId,
      ]);
      totalPrice += (data?.price as number) * product.count;
    });
    setTotalPrice(totalPrice);
  }, [cartQueryData, queryClient]);

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
        <Text>{totalPrice < 30000 ? 3000 : 0} 원</Text>
      </Flex>
      <Divider />
      <Flex my="1.3rem">
        <Text>결제금액</Text>
        <Spacer />
        <Text textStyle="sm_wb_cp">
          {totalPrice < 30000 ? totalPrice + 3000 : totalPrice} 원
        </Text>
      </Flex>
    </>
  );
}

export default TotalPrice;
