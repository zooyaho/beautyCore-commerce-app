import { Box, Divider, Flex, Img, Spacer, Text } from '@chakra-ui/react';

import { useGetProduct } from '@apis/product/ProductApi.query';

import { intComma } from '@utils/format';

interface OrderSectionProps {
  productId: number;
  count: number;
  shippingStatus?: string;
}

function OrderSection({ productId, count, shippingStatus }: OrderSectionProps) {
  const { data: product, isLoading } = useGetProduct(productId);
  return (
    <>
      {!isLoading && product && (
        <>
          <Flex p=".7rem 1rem">
            <Img mr=".7rem" w="3.75rem" h="3.75rem" src={product.photo} />
            <Box textStyle="sm">
              <Text fontWeight="bold">{product.name}</Text>
              <Text textColor="gray.600">
                {product.name}&nbsp;|&nbsp;{product.capacity}ml
              </Text>
              <Text textColor="primary.500" fontWeight="bold">
                {intComma(product.price)}원&nbsp;/&nbsp;{count}개
              </Text>
            </Box>
            <Spacer />
            <Text
              textStyle="sm"
              fontWeight="700"
              color="primary.500"
              alignSelf="center"
            >
              {shippingStatus === 'PAID' ? '결제완료' : ''}
            </Text>
          </Flex>
          <Divider />
        </>
      )}
    </>
  );
}

export default OrderSection;
