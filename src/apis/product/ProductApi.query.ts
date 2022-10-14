import { useQuery } from '@tanstack/react-query';

import { getProduct } from './ProductApi';

export const useGetProductList = () => {
  const { data } = useQuery(['product'], () => getProduct);
  console.log(data);
  return data;
};
export const useGetProduct = (productId: number) => {
  const { data, isLoading } = useQuery(['product', productId], () =>
    getProduct(productId),
  );
  return { data, isLoading };
};
