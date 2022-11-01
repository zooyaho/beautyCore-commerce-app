import { useCallback, useMemo } from 'react';

import { Button, ChakraProps } from '@chakra-ui/react';

import {
  usePatchCartItemMutation,
  usePostCartItemMutation,
  usePostCartMutation,
} from '@apis/cart/CartApi.mutation';
import { useGetCart } from '@apis/cart/CartApi.query';
import { useGetUserMe } from '@apis/user/userApi.query';
import useAppStore from '@features/useAppStore';

import { useQueryClient } from '@tanstack/react-query';

interface CartButtonProps extends ChakraProps {
  children: JSX.Element;
  variant: string;
  size?: string;
  drawerOpen?: () => void;
}

function CartButton({ children, variant, size, drawerOpen }: CartButtonProps) {
  const { data: userData } = useGetUserMe();
  const { data: cartData } = useGetCart(userData?.id as number);
  const { mutate: postCartMutate } = usePostCartMutation();
  const { mutateAsync: postCartItemMutate } = usePostCartItemMutation();
  const { mutate: patchCartItemMutate } = usePatchCartItemMutation();

  const storeCartList = useAppStore((store) => store.CART.productList);
  const queryClient = useQueryClient();
  const qeuryCartList = queryClient.getQueryData(['cart']);
  console.log('store cart list: ', storeCartList);
  console.log('cartData: ', cartData);

  const cartList = useMemo(() => {
    if (cartData) return cartData[0].cartitem;
  }, [cartData]);

  const cartClickHandler = useCallback(() => {
    try {
      console.log('⭐️cartList: ', cartList);
      if (!cartData && userData?.id) postCartMutate(userData?.id); // user initial cart id post요청
      if (cartList && cartData && !cartList.length) {
        // store의 cart list 서버 post요청
        storeCartList.forEach((product, index) => {
          console.log('🚨store의 cart list 서버 post요청의 횟수: ', index);
          postCartItemMutate(
            {
              productId: product.productId,
              cartId: cartData[0].id,
              count: product.productQuantity,
            },
            {
              onSuccess: () => {
                queryClient.invalidateQueries(['cart']);
              },
            },
          );
        });
      }
      // cartData 업데이트 되기 전에 비교를 해서 업데이트가 이상하게 됨!!!
      if (cartData && cartList && !!cartList.length) {
        // 새로운 제품 장바구니에 추가(post)
        const addPostCartRes = storeCartList.filter((storeP) => {
          let flag = true;
          console.log('🔪cartList: ', cartList);
          console.log('💥qeuryCartList: ', qeuryCartList);
          cartList.forEach((queryP) => {
            if (queryP.productId === storeP.productId) flag = false;
          });
          return flag;
        });
        console.log('🔥addPostCartRes: ', addPostCartRes);
        if (addPostCartRes.length) {
          console.log('post cart item 실행(추가)');
          addPostCartRes.forEach((product) => {
            postCartItemMutate({
              productId: product.productId,
              cartId: cartData[0].id,
              count: product.productQuantity,
            });
          });
        }
        // cart에 담겨있는 제품은 수량 비교해서 업데이트(patch)
        const updatePatchCartRes = storeCartList.filter((storeP) => {
          let flag = false;
          cartList.forEach((queryP) => {
            if (
              queryP.productId === storeP.productId &&
              storeP.productQuantity !== queryP.count
            )
              flag = true;
          });
          return flag;
        });
        const addCartProductId = updatePatchCartRes.map((updateP) => {
          const queryP = cartList.find((queryP) => {
            return queryP.productId === updateP.productId;
          });
          return { ...updateP, id: queryP?.id };
        });
        // console.log('🤮updatePatchCartRes: ', addCartProductId);
        if (addCartProductId.length) {
          console.log('patch cart item 실행(업데이트)');
          addCartProductId.forEach((product) => {
            patchCartItemMutate({
              id: product.id,
              count: product.productQuantity,
            });
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [
    cartData,
    cartList,
    patchCartItemMutate,
    postCartItemMutate,
    postCartMutate,
    queryClient,
    storeCartList,
    userData?.id,
  ]);

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => {
        cartClickHandler();
        if (drawerOpen) drawerOpen();
      }}
    >
      {children}
    </Button>
  );
}

export default CartButton;
