import { UserMe } from '@apis/user/userApi.type';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { getOrder, getOrderList, getOrderStatus } from './OrderApi';

export const useGetOrderList = () => {
  const { data } = useQuery(['order'], () => getOrderList);
  return data;
};
export const useGetOrder = (id: string) => {
  const { data } = useQuery(['order', id], () => getOrder(id));
  return data;
};
export const useGetOrderStatus = (id: number, userData?: UserMe) => {
  const data = useQuery(['order', id], () => getOrderStatus(id), {
    enabled: !!userData,
  });
  return data;
};
