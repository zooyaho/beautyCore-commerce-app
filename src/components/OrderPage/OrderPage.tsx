import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

import { CONFIG } from '@config';

import { useToast } from '@chakra-ui/react';

import { postOrder } from '@apis/order/OrderApi';
import { localOrderListType } from '@apis/order/OrderApi.type';
import { UserMe } from '@apis/user/userApi.type';

import { useQueryClient } from '@tanstack/react-query';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { getLocalStorage } from '@utils/localStorage/helper';

import OrderPageView from './OrderPage.view';
import useFormValidate from './_hooks/useFormValidate';

const TOSSPAYMENT_CLIENT_KEY = `${CONFIG.TOSSPAYMENT_CLIENT_KEY}`;
const TOSSPAYMENT_SUCCESS_URL = `${CONFIG.TOSSPAYMENT_SUCCESS_URL}`;
const TOSSPAYMENT_FAIL_URL = `${CONFIG.TOSSPAYMENT_FAIL_URL}`;

const OrderPage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  const toast = useToast();

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
          orderMessage:
            orderRequest.length === 0 ? '요청메세지 없음' : orderRequest,
        };
        console.log('⭐️order: ', order);
        try {
          const orderData = await postOrder(order);
          const tossPayments = await loadTossPayments(TOSSPAYMENT_CLIENT_KEY);

          if (orderList)
            tossPayments //post 요청
              .requestPayment('카드', {
                amount: totalPrice + (totalPrice > 30000 ? 0 : 3000),
                orderId: orderData.id,
                orderName: `${orderList[0].name} 외 ${orderList.length - 1}건`,
                customerName: username,
                successUrl: `${TOSSPAYMENT_SUCCESS_URL}`,
                failUrl: `${TOSSPAYMENT_FAIL_URL}`,
              })
              .catch(function (error) {
                if (error.code === 'INVALID_CARD_COMPANY') {
                  // 유효하지 않은 카드 코드에 대한 에러 처리
                  toast({
                    description: '유효하지 않은 카드입니다.',
                    status: 'error',
                  });
                  return;
                }
                toast({
                  description: error.message,
                  status: 'error',
                });
              });
        } catch (e) {
          console.error(e);
        }
      }
    },
  );
  return (
    <OrderPageView
      formData={formData}
      onSubmit={onSubmit}
      orderList={orderList}
      totalPrice={totalPrice}
    />
  );
};

export default OrderPage;
