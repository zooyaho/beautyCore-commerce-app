import { useQuery } from '@tanstack/react-query';

import { getOrder, getOrderList } from './OrderApi';

export const useGetOrderList = () => {
  const { data } = useQuery(['order'], () => getOrderList);
  return data;
};

export const useGetOrder = (id: number) => {
  const { data } = useQuery(['order', id], () => getOrder(id));
  return data;
};
