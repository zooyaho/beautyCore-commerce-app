import { useMemo } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Img,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { Cart } from '@apis/cart/CartApi.type';
import { useGetProduct } from '@apis/product/ProductApi.query';

import { useQueryClient } from '@tanstack/react-query';

import {
  CloseButtonIcon,
  MinusCartButtonIcon,
  PlusCartButtonIcon,
} from 'generated/icons/MyIcons';

interface CartItemProps {
  productId: number;
}

function CartItem({ productId }: CartItemProps) {
  const { data: productData } = useGetProduct(productId);
  const queryClient = useQueryClient();
  const cartQueryData: Cart[] | undefined = queryClient.getQueryData(['cart']);
  const productQuantity = useMemo(() => {
    if (cartQueryData) {
      return cartQueryData?.[0].cartitem.find(
        (product) => product.productId === productId,
      )?.count;
    }
  }, [cartQueryData, productId]);

  return (
    <>
      {productData && (
        <Container bg="white" mt=".7rem" py="1rem">
          <Flex>
            <Checkbox
              alignSelf="flex-start"
              colorScheme="primary"
              size="lg"
              mr=".7rem"
            />
            <Box w="100%">
              <Flex w="100%">
                <Flex>
                  <Img mr=".7rem" src="/images/dummyImg/상품이미지.png" />
                  <Box textStyle="md">
                    <Text fontWeight="700">{productData.name}</Text>
                    <Text textColor="gray.600">
                      {productData.name} | {productData.capacity}ml
                    </Text>
                    <Text textColor="primary.500" fontWeight="700">
                      {productData.price}원
                    </Text>
                  </Box>
                </Flex>
                <Spacer />
                <Button variant="transparentButton" pr="0" h="1rem">
                  <CloseButtonIcon boxSize="12px" />
                </Button>
              </Flex>
              <Box bg="gray.200" borderRadius="5px" my="1rem" p=".7rem">
                <Text textStyle="sm_wn_cg600">{productData.name}</Text>
                <Flex mt=".3rem">
                  <Flex
                    bg="white"
                    border="1px solid #EAECF0"
                    borderRadius="5px"
                    h="25px"
                  >
                    <Button variant="transparentButton" w="1.5rem" h="1.5rem">
                      <MinusCartButtonIcon boxSize="25px" />
                    </Button>
                    <Text
                      w="25px"
                      textAlign="center"
                      textStyle="sm"
                      lineHeight="25px"
                      borderLeft="1px solid #EAECF0"
                      borderRight="1px solid #EAECF0"
                    >
                      {productQuantity}
                    </Text>
                    <Button variant="transparentButton" w="1.5rem" h="1.5rem">
                      <PlusCartButtonIcon boxSize="25px" />
                    </Button>
                  </Flex>
                  <Spacer />
                  <Text textStyle="sm_wb_cg600">
                    {productQuantity && productQuantity * productData.price}원
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Container>
      )}
    </>
  );
}

export default CartItem;
