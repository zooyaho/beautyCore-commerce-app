import { UserMe } from '@apis/user/userApi.type';

import { useQuery } from '@tanstack/react-query';

import { getOrder, getOrderList, getOrderStatus } from './OrderApi';
import { OrderGetStatus, OrderResults } from './OrderApi.type';

export const useGetOrderList = () => {
  const { data } = useQuery(['order'], () => getOrderList);
  return data;
};
export const useGetOrder = (id: string) => {
  const data = useQuery<Partial<OrderResults>>(['order', id], () =>
    getOrder(id),
  );
  return data;
};
export const useGetOrderStatus = (id: number, userData?: UserMe) => {
  const data = useQuery<OrderGetStatus>(
    ['order', id],
    () => getOrderStatus(id),
    {
      enabled: !!userData,
    },
  );
  return data;
};
