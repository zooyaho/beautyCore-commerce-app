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
import { useGetProduct } from '@apis/product/ProductApi.query';
import { cartSliceAction } from '@features/cart/cartSlice';
import useAppStore from '@features/useAppStore';

import OrderProductItem from '@components/OrderPage/_fragments/OrderProductItem';

import { useQueryClient } from '@tanstack/react-query';

import CheckBox from './CheckBox';
import GrayCountSection from './GrayCountSection';

import { CloseButtonIcon } from 'generated/icons/MyIcons';

interface CartItemProps {
  productQueryData: CartItemType;
  index: number;
}

function CartItem({ productQueryData, index }: CartItemProps) {
  const { data: productData } = useGetProduct(productQueryData.productId);
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
  // console.log('checkedCartList: ', checkedCartList); // {productId: number; count: number;}
  const cartItem = useMemo(
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

  return (
    <>
      {productData && (
        <Container bg="white" mt=".7rem" py="1rem">
          <Flex>
            <CheckBox value={index} productId={productData.id} />
            <Box w="100%">
              <OrderProductItem
                productId={productData.id}
                flexPadding={'1rem'}
                imgSize={'5rem'}
                textStyle={['sm_wb', 'sm_wn_cg600', 'sm_wb_cp']}
              >
                <>
                  <Spacer />
                  <Button
                    variant="transparentButton"
                    pr="0"
                    h="1rem"
                    onClick={deleteCartHandler}
                  >
                    <CloseButtonIcon boxSize="12px" />
                  </Button>
                </>
              </OrderProductItem>
              {printCount && (
                <GrayCountSection
                  name={productData.name}
                  count={printCount.count}
                  price={productData.price}
                  decreQuantityServerHandler={decrementQuantityHandler}
                  increQuantityServerHandler={incrementeQuantityHandler}
                />
              )}
            </Box>
          </Flex>
        </Container>
      )}
    </>
  );
}

export default CartItem;
