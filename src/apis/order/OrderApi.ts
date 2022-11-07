import instance from '@apis/_axios/instance';

import { loadTossPayments } from '@tosspayments/payment-sdk';

import { Order } from './OrderApi.type';

export async function tossPayments(clientKey: string) {
  const tossPayments = await loadTossPayments(clientKey);
  return tossPayments;
}

export async function getOrderList() {
  const { data } = await instance('/v1/order/');
  console.log(data);
  return data;
}
export async function postOrder(body: Order) {
  const { data } = await instance({
    method: 'POST',
    url: '/v1/order/',
    data: body,
  });
  return data;
}
export async function getOrder(id: number) {
  const { data } = await instance(`/v1/order/${id}`);
  return data;
}
export async function putOrder(id: number, body: Order) {
  const { data } = await instance({
    method: 'PUT',
    url: `/v1/order/${id}`,
    data: body,
  });
  return data;
}
