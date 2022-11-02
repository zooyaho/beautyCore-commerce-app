import React, { useMemo } from 'react';

import { Cart } from '@apis/cart/CartApi.type';
import useAppStore from '@features/useAppStore';

import { useQueryClient } from '@tanstack/react-query';

import OrderPageView from './OrderPage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const OrderPage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  // console.log('formData: ', formData);

  const checkedCartList = useAppStore((store) => store.CART.checkedCartList);
  const queryClient = useQueryClient();
  const queryCartData = queryClient.getQueryData(['cart']) as Cart[];
  const orderList = useMemo(() => {
    console.log('👉🏻queryCartData: ', queryCartData); // 새로고침하면 undefined
    console.log('👉🏻checkedCartList: ', checkedCartList); // 새로고침하면 [] => 해결방법)local에 저장해야 함!
    if (queryCartData) {
      return queryCartData[0].cartitem.filter((product) =>
        checkedCartList.find(
          (checkedProduct) => product.productId === checkedProduct.productId,
        ),
      );
    }
  }, [checkedCartList, queryCartData]);
  console.log('🤑orderList: ', orderList); // {id: 593, cartId: 79, productId: 18, count: 1}

  const onSubmit = handleSubmit(
    ({
      username,
      phone,
      address,
      addressDetail,
      orderUsername,
      orderPhone,
      orderAddress,
      orderAddressDetail,
      orderRequest,
    }) => {
      console.log(
        `submitted: ${username},  ${phone}, ${address}, ${addressDetail}, ${orderUsername},  ${orderPhone}, ${orderAddress}, ${orderAddressDetail},${orderRequest}`,
      );
    },
  );
  return (
    <OrderPageView
      formData={formData}
      onSubmit={onSubmit}
      orderList={orderList}
    />
  );
};

export default OrderPage;
