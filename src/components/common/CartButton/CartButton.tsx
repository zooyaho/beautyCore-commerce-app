import { useCallback, useMemo } from 'react';

import { Button, ChakraProps } from '@chakra-ui/react';

import {
  usePatchCartItemMutation,
  usePostCartItemMutation,
  usePostCartMutation,
} from '@apis/cart/CartApi.mutation';
import { useGetCart } from '@apis/cart/CartApi.query';
import useAppStore from '@features/useAppStore';

import { useQueryClient } from '@tanstack/react-query';
import { getUser } from '@utils/localStorage/user';

interface CartButtonProps extends ChakraProps {
  children: JSX.Element;
  variant: string; // 버튼 스타일
  size?: string; // 버튼 사이즈
  drawerOpen?: () => void; // 장바구니 모달창 open메서드
}

function CartButton({ children, variant, size, drawerOpen }: CartButtonProps) {
  const userData = getUser();
  const { data: cartData } = useGetCart(userData?.user_id as number); // user의 cart list data
  const { mutate: postCartMutate } = usePostCartMutation();
  const { mutateAsync: postCartItemMutate } = usePostCartItemMutation();
  const { mutate: patchCartItemMutate } = usePatchCartItemMutation();

  const storeCartList = useAppStore((store) => store.CART.productList);
  const queryClient = useQueryClient();

  const cartList = useMemo(() => {
    // user의 cart item list data
    if (cartData && !!cartData.length) return cartData[0].cartitem;
  }, [cartData]);

  const cartClickHandler = useCallback(() => {
    try {
      if (cartData && !cartData.length && userData && userData.user_id) {
        // user의 cart item data가 하나도 없을 경우 user의 장바구니 id생성
        // user initial cart id post요청
        postCartMutate(userData?.user_id);
      }
      if (cartList && cartData && !cartList.length) {
        // user의 서버 장바구니에 상품이 하나도 없을 경우 상품 추가
        // cart store의 productList의 각 item 별로 장바구니 id 생성
        storeCartList.forEach((product) => {
          postCartItemMutate(
            {
              productId: product.productId,
              cartId: cartData[0].id, // user의 cart id
              count: product.productQuantity,
            },
            {
              onSuccess: () => {
                queryClient.invalidateQueries(['cart']); // 캐싱 업데이트
              },
            },
          );
        });
      }
      if (cartData && cartList && !!cartList.length) {
        // user의 서버 장바구니에 새로운 상품 추가
        // cart store의 productList에서 새롭게 추가된 상품의 장바구니 id 생성

        // cart store와 cart query(서버데이터)를 비교하여 새롭게 추가할 상품 filtering
        const addPostCartRes = storeCartList.filter((storeP) => {
          let flag = true;
          cartList.forEach((queryP) => {
            if (queryP.productId === storeP.productId) flag = false;
          });
          return flag;
        });

        if (addPostCartRes.length) {
          // 새롭게 추가할 상품이 있으면 해당 상품의 장바구니 id 생성
          addPostCartRes.forEach((product) => {
            postCartItemMutate(
              {
                productId: product.productId,
                cartId: cartData[0].id,
                count: product.productQuantity,
              },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries(['cart']); // 캐싱 업데이트
                },
              },
            );
          });
        }

        // cart store와 cart query(서버데이터)를 비교하여 수량이 변경된 상품 filtering
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

        // 업데이트할 상품의 id로 해당 상품의 장바구니 id 찾아 반환
        const addCartProductId = updatePatchCartRes.map((updateP) => {
          const queryP = cartList.find((queryP) => {
            return queryP.productId === updateP.productId;
          });
          return { ...updateP, id: queryP?.id };
        });

        if (addCartProductId.length) {
          // 수량이 변경된 장바구니 상품이 있을 경우 업데이트
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
    userData,
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
