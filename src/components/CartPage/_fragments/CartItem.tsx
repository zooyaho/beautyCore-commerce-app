import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  Container,
  Flex,
  Img,
  Spacer,
  Text,
} from '@chakra-ui/react';

import {
  useDeleteCartItemMutation,
  usePatchCartItemMutation,
} from '@apis/cart/CartApi.mutation';
import { useGetCartItem } from '@apis/cart/CartApi.query';
import { CartItem as CartItemType } from '@apis/cart/CartApi.type';
import { ProductDetail } from '@apis/product/ProductAPi.type';
import { useGetProduct } from '@apis/product/ProductApi.query';
import { CheckedCartItem, cartSliceAction } from '@features/cart/cartSlice';
import useAppStore from '@features/useAppStore';

import { useQueryClient } from '@tanstack/react-query';
import { setLocalStorage } from '@utils/localStorage/helper';

import CheckBox from './CheckBox';

import {
  CloseButtonIcon,
  MinusCartButtonIcon,
  PlusCartButtonIcon,
} from 'generated/icons/MyIcons';

interface CartItemProps {
  productQueryData: CartItemType;
  index: number;
}

function CartItem({ productQueryData, index }: CartItemProps) {
  const { data: productData } = useGetProduct(productQueryData.productId); // product에 all 데이터
  const { data: printCount } = useGetCartItem(productQueryData.id);
  const queryClient = useQueryClient();
  const { mutate: patchCartItemMutate } = usePatchCartItemMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart', productQueryData.id]);
        queryClient.invalidateQueries(['cart']);
      },
    },
  });
  const { mutate: deleteCartItemMutate } = useDeleteCartItemMutation();
  const dispatch = useDispatch();
  const checkedCartList = useAppStore((store) => store.CART.checkedCartList);
  console.log('checkedCartList: ', checkedCartList); // {productId: number; count: number;}
  const cartItem = useMemo(
    // {productId: 18, count: 3}
    () =>
      checkedCartList.find((product) => product.productId === productData?.id),
    [checkedCartList, productData?.id],
  );

  const incrementeQuantityHandler = () => {
    if (productQueryData) {
      patchCartItemMutate({
        id: productQueryData.id,
        count: productQueryData.count + 1,
      });
      queryClient.setQueryData(['cart', productQueryData.id], {
        count: productQueryData.count + 1,
      });
      if (productData) {
        if (cartItem) {
          dispatch(
            cartSliceAction.updateCheckedCartList({
              productId: productData.id,
              count: productQueryData.count + 1,
            }),
          );
        }
      }
    }
  };
  const decrementQuantityHandler = () => {
    if (productQueryData && productQueryData.count > 1) {
      patchCartItemMutate({
        id: productQueryData.id,
        count: productQueryData.count - 1,
      });
      queryClient.setQueryData(['cart', productQueryData.id], {
        count: productQueryData.count - 1,
      });
      if (productData) {
        if (cartItem) {
          dispatch(
            cartSliceAction.updateCheckedCartList({
              productId: productData.id,
              count: productQueryData.count - 1,
            }),
          );
        }
      }
    }
  };
  const deleteCartHandler = () => {
    dispatch(
      cartSliceAction.deleteProductList({
        productId: productQueryData.productId,
      }),
    );
    dispatch(
      cartSliceAction.deleteCheckedCartList({
        productId: productQueryData.productId,
      }),
    );
    deleteCartItemMutate(productQueryData.id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart', productQueryData.id]);
        queryClient.invalidateQueries(['cart']);
      },
    });
  };
  /*   const setStorageOrderListHandler = () => {
      const { name, photo, capacity, price } = productData as ProductDetail;
      const { productId, count } = cartItem as CheckedCartItem;
      setLocalStorage('order', {
        productId,
        name,
        photo,
        capacity,
        price,
        count,
      });
    }; */

  return (
    <>
      {productData && (
        <Container bg="white" mt=".7rem" py="1rem">
          <Flex>
            <CheckBox value={index} productId={productQueryData.productId} />
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
                <Button
                  variant="transparentButton"
                  pr="0"
                  h="1rem"
                  onClick={deleteCartHandler}
                >
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
                    <Button
                      variant="transparentButton"
                      w="1.5rem"
                      h="1.5rem"
                      onClick={decrementQuantityHandler}
                    >
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
                      {printCount && printCount.count}
                    </Text>
                    <Button
                      variant="transparentButton"
                      w="1.5rem"
                      h="1.5rem"
                      onClick={incrementeQuantityHandler}
                    >
                      <PlusCartButtonIcon boxSize="25px" />
                    </Button>
                  </Flex>
                  <Spacer />
                  <Text textStyle="sm_wb_cg600">
                    {productQueryData &&
                      productQueryData.count * productData.price}
                    원
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