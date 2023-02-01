import { UserMe } from '@apis/user/userApi.type';

import { useQuery } from '@tanstack/react-query';

import { getOrder, getOrderStatus } from './OrderApi';
import { Order, OrderGetStatus } from './OrderApi.type';

export const useGetOrder = (id: string) => {
  const data = useQuery<Order>(['order', id], () => getOrder(id), {
    enabled: !!id,
  });
  return data;
};
export const useGetOrderStatus = (
  page: number,
  userData?: UserMe,
  userId?: number,
) => {
  const data = useQuery<OrderGetStatus>(
    ['order', userId],
    () => getOrderStatus(page, userId),
    {
      enabled: !!userData,
    },
  );
  return data;
};
