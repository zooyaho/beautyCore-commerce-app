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
  count?: number;
  children?: JSX.Element;
  flexPadding?: string;
  imgSize?: string;
  textStyle?: string[];
}

function OrderProductItem({
  productId,
  count,
  children,
  flexPadding,
  imgSize,
  textStyle,
}: OrderProductItem) {
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
        <Flex
          pt={flexPadding ? flexPadding : 'auto'}
          p={flexPadding ? 'auto' : '.7rem 1rem'}
        >
          <Img
            mr=".7rem"
            w={imgSize ? imgSize : '3.75rem'}
            h={imgSize ? imgSize : '3.75rem'}
            src={product.photo}
          />
          <Box>
            <Text textStyle={textStyle ? textStyle[0] : 'ss_wb'}>
              {product.name}
            </Text>
            <Text textStyle={textStyle ? textStyle[1] : 'sm_wb_cp500'}>
              {product.name} | {product.capacity}ml
            </Text>
            <Text textStyle={textStyle ? textStyle[2] : 'ss_wb_cp'}>
              {count
                ? `${product.price * count}원 / ${count}개`
                : `${product.price}원`}
            </Text>
          </Box>
          {children}
        </Flex>
      )}
    </>
  );
}

export default OrderProductItem;
