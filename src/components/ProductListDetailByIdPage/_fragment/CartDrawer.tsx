import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { cartSliceAction } from '@features/cart/cartSlice';
import useAppStore from '@features/useAppStore';

import {
  MinusCartButtonIcon,
  PlusCartButtonIcon,
} from 'generated/icons/MyIcons';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SelectedProductType {
  productId: number;
  name: string;
  price: number;
  productQuantity: number;
}

function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const dispatch = useDispatch();
  const cartProductList = useAppStore((store) => store.CART.productList);

  const updateDataStore = useCallback(
    (selectedProduct, productQuantity) => {
      dispatch(
        cartSliceAction.updateProductList({
          ...selectedProduct,
          productQuantity,
        }),
      );
    },
    [dispatch],
  );

  const incrementeQuantityHandler =
    (selectedProduct: SelectedProductType) => () => {
      updateDataStore(selectedProduct, selectedProduct.productQuantity + 1);
    };

  const decrementQuantityHandler =
    (selectedProduct: SelectedProductType) => () => {
      if (selectedProduct.productQuantity > 1) {
        updateDataStore(selectedProduct, selectedProduct.productQuantity - 1);
      }
    };

  return (
    <>
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius="20px 20px 0px 0px">
          <DrawerBody>
            {/* s: cart list */}
            {cartProductList &&
              cartProductList.map((product) => {
                return (
                  <React.Fragment key={product.productId}>
                    <Box bg="gray.200" borderRadius="5px" my="1rem" p=".7rem">
                      <Text
                        fontWeight="400"
                        textColor="gray.600"
                        textStyle="md"
                      >
                        {product.name}
                      </Text>
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
                            onClick={decrementQuantityHandler(product)}
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
                            {product.productQuantity}
                          </Text>
                          <Button
                            variant="transparentButton"
                            w="1.5rem"
                            h="1.5rem"
                            onClick={incrementeQuantityHandler(product)}
                          >
                            <PlusCartButtonIcon boxSize="25px" />
                          </Button>
                        </Flex>
                        <Spacer />
                        <Text textStyle="sm_wb_cg600">
                          {product.productQuantity * product.price}원
                        </Text>
                      </Flex>
                    </Box>
                  </React.Fragment>
                );
              })}
            {/* e: cart list */}
            <Flex>
              <Text>
                총&nbsp;수량&nbsp;
                <Text as="strong" textStyle="sm_wb_cp">
                  {cartProductList.reduce(
                    (prev, cur) => prev + cur.productQuantity,
                    0,
                  )}
                </Text>
                &nbsp;개
              </Text>
              <Spacer />
              <Text>
                합계&nbsp;
                <Text as="strong" textStyle="sm_wb">
                  {cartProductList.reduce(
                    (prev, cur) => prev + cur.price * cur.productQuantity,
                    0,
                  )}
                </Text>
              </Text>
            </Flex>
            <Flex mt="1rem" mb="1.5rem" gap=".7rem">
              <Button variant="whiteButton" size="lg">
                장바구니
              </Button>
              <Button variant="primaryButton" size="lg">
                바로구매
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default CartDrawer;
