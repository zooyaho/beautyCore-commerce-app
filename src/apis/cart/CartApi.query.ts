import { useQuery } from '@tanstack/react-query';

import { getCart, getCartItem, postCart, postCartItem } from './CartApi';
import { CartItem } from './CartApi.type';

export const useGetCart = (userId: number) => {
  const { data } = useQuery(['cart'], () => getCart(userId), {
    enabled: !!userId,
  });
  return data?.results;
};
export const useGetCartItem = (id: number) => {
  const { data } = useQuery(['cart', id], () => getCartItem(id), {
    enabled: !!id,
  });
  return { data };
};
// export const usePostCart = (userId: number) => {
//   const { data } = useQuery(['cart'], () => postCart(userId), {
//     enabled: !!userId,
//   });
//   return data?.results;
// };
// export const usePostCartItem = (body: CartItem) => {
//   const { data } = useQuery(
//     ['cart-item', body.productId],
//     () => postCartItem(body),
//     {
//       enabled: !!body.cartId,
//     },
//   );
//   return data?.results;
// };
