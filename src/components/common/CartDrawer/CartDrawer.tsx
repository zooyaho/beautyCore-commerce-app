import Link from 'next/link';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { getProduct } from '@apis/product/ProductApi';
import { cartSliceAction } from '@features/cart/cartSlice';
import useAppStore from '@features/useAppStore';

import GrayCountSection from '@components/CartPage/_fragments/GrayCountSection';
import AddCartModal from '@components/ProductListDetailByIdPage/_fragment/AddCartModal';
import CartButton from '@components/common/CartButton';

import { ROUTES } from '@constants/routes';
import { setLocalStorage } from '@utils/localStorage/helper';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SelectedProductType {
  productId: number;
  name: string;
  price: number;
  productQuantity: number;
}

function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const dispatch = useDispatch();
  const cartProductList = useAppStore((store) => store.CART.productList);
  const {
    onOpen,
    isOpen: addCartModalIsOpen,
    onClose: addCartModalOnClose,
  } = useDisclosure();

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

  const setStorageOrderListHandler = async () => {
    const productList = await Promise.all(
      cartProductList.map(
        async (product) => await getProduct(product.productId),
      ),
    );
    const orderList = productList.map((product) => {
      const count = cartProductList.find(
        (cart) => cart.productId === product.id,
      )?.productQuantity;

      if (count)
        return {
          productId: product.id,
          name: product.name,
          photo: product.photo,
          capacity: product.capacity,
          price: product.price,
          count: count,
        };
    });
    setLocalStorage('order', orderList);
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
                    <GrayCountSection
                      name={product.name}
                      count={product.productQuantity}
                      price={product.price}
                      product={product}
                      decreQuantityStoreHandler={decrementQuantityHandler}
                      increQuantityStoreHandler={incrementeQuantityHandler}
                    />
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
              <CartButton variant="whiteButton" size="lg" drawerOpen={onOpen}>
                <Text as="span">장바구니</Text>
              </CartButton>
              <Button
                variant="primaryButton"
                size="lg"
                onClick={setStorageOrderListHandler}
              >
                <Link href={ROUTES.ORDER}>
                  <Center as="a" w="100%" h="100%">
                    바로구매
                  </Center>
                </Link>
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <AddCartModal isOpen={addCartModalIsOpen} onClose={addCartModalOnClose} />
    </>
  );
}
export default CartDrawer;
