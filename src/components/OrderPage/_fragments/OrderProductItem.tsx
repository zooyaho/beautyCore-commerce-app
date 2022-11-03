import {
  Box,
  Center,
  CircularProgress,
  Flex,
  Img,
  Text,
} from '@chakra-ui/react';

import { useGetProduct } from '@apis/product/ProductApi.query';

import { LAYOUT } from '@constants/layout';

interface OrderProductItem {
  productId: number;
  count: number;
}

function OrderProductItem({ productId, count }: OrderProductItem) {
  const { data: product, isLoading } = useGetProduct(productId);
  return (
    <>
      {isLoading || !product ? (
        <>
          <Center pt={LAYOUT.HEADER.HEIGHT} minH="80vh">
            <CircularProgress isIndeterminate color="primary.500" />
          </Center>
        </>
      ) : (
        <Flex p=".7rem 1rem">
          <Img mr=".7rem" w="3.75rem" h="3.75rem" src={product.photo} />
          <Box>
            <Text textStyle="ss_wb">{product.name}</Text>
            <Text textStyle="ss_wn_cg600" textColor="gray.600">
              {product.name} | {product.capacity}ml
            </Text>
            <Text textStyle="ss_wb_cp">
              {product.price * count}원&nbsp;/&nbsp;
              {count}개
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
}

export default OrderProductItem;
