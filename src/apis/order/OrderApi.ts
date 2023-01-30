import instance from '@apis/_axios/instance';

import { Order, OrderStatus } from './OrderApi.type';

export async function getOrderList() {
  const { data } = await instance('/v1/order/');
  console.log(data);
  return data;
}
export async function postOrder(body: Partial<Order>) {
  const { data } = await instance({
    method: 'POST',
    url: '/v1/order/',
    data: body,
  });
  return data;
}
export async function getOrder(id: string) {
  const { data } = await instance(`/v1/order/${id}/`);
  return data;
}
export async function putOrder(id: number, body: Partial<Order>) {
  const { data } = await instance({
    method: 'PUT',
    url: `/v1/order/${id}/`,
    data: body,
  });
  return data;
}
export async function getOrderStatus(page: number, userId?: number) {
  const { data } = await instance.get(
    userId && page
      ? `/v1/order/status/?page=${page}&&user_id=${userId}`
      : `/v1/order/status/?page=${page}`,
  );
  return data;
}
export async function postOrderStatus(body: OrderStatus) {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/order/status/`,
    data: body,
  });
  return data;
}
export async function putOrderStatus(orderId: string, body: Partial<Order>) {
  const { data } = await instance({
    method: 'PUT',
    url: `/v1/order/status/${orderId}/`,
    data: body,
  });
  return data;
}
