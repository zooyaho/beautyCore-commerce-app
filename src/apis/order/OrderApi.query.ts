import { UserMe } from '@apis/user/userApi.type';

import { useQuery } from '@tanstack/react-query';

import { getOrder, getOrderList, getOrderStatus } from './OrderApi';
import { Order, OrderGetStatus } from './OrderApi.type';

export const useGetOrderList = () => {
  const { data } = useQuery(['order'], () => getOrderList);
  return data;
};
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
    () => {
      if (userId && page) return getOrderStatus(page, userId);
      else return getOrderStatus(page);
    },
    {
      enabled: !!userData,
    },
  );
  return data;
};
