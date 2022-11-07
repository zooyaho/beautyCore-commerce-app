import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

import { postOrder } from '@apis/order/OrderApi';
import { localOrderListType } from '@apis/order/OrderApi.type';
import { UserMe } from '@apis/user/userApi.type';

import { useQueryClient } from '@tanstack/react-query';
import { getLocalStorage } from '@utils/localStorage/helper';

import OrderPageView from './OrderPage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface SignUpPageProps extends ChakraProps { }

const OrderPage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;

  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData<UserMe>(['user']);
  console.log('userData: ', userData);
  const [orderList, setOrderList] = useState<localOrderListType[]>();
  const router = useRouter();

  useEffect(() => {
    const localData = getLocalStorage<localOrderListType[]>('order', []);
    if (localData.length) {
      setOrderList(getLocalStorage<localOrderListType[]>('order', []));
    } else {
      router.back();
    }
  }, [orderList?.length, router]);

  const totalPrice = useMemo(
    () => orderList?.reduce((prev, cur) => prev + cur.price * cur.count, 0),
    [orderList],
  );
  const totalCount = useMemo(
    () => orderList?.reduce((prev, cur) => prev + cur.count, 0),
    [orderList],
  );

  const onSubmit = handleSubmit(
    async ({
      username,
      phone,
      zonecode,
      address,
      addressDetail,
      orderUsername,
      orderPhone,
      orderZonecode,
      orderAddress,
      orderAddressDetail,
      orderRequest,
    }) => {
      console.log(
        `submitted: ${username},  ${phone}, ${zonecode}, ${address}, ${addressDetail}, ${orderUsername},  ${orderPhone}, ${orderZonecode}, ${orderAddress}, ${orderAddressDetail},${orderRequest}`,
      );
      if (userData && totalPrice) {
        const order = {
          userId: userData.id,
          price: totalPrice,
          shippingPrice: totalPrice > 30000 ? 0 : 3000,
          amount: totalPrice + (totalPrice > 30000 ? 0 : 3000),
          method: 'CARD',
          userName: username,
          userPhone: phone,
          userAddrPost: zonecode,
          userAddr: address,
          userAddrDetail: addressDetail,
          shipName: orderUsername,
          shipPhone: orderPhone,
          shipAddrPost: orderZonecode,
          shipAddr: orderAddress,
          shipAddrDetail: orderAddressDetail,
          orderMessage: orderRequest.length === 0 ? '' : orderRequest,
        };
        console.log('⭐️order: ', order);
        const orderData = await postOrder(order);
        console.log(orderData.id, orderData.created);
      }
    },
  );
  return (
    <OrderPageView
      formData={formData}
      onSubmit={onSubmit}
      orderList={orderList ? orderList : []}
      totalPrice={totalPrice ? totalPrice : 0}
    />
  );
};

export default OrderPage;
