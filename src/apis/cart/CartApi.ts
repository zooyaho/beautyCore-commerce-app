import instance from '@apis/_axios/instance';

import { CartItem, CartList } from './CartApi.type';

export async function getCart(userId: number): Promise<CartList> {
  const { data } = await instance(`/v1/cart/?user_id=${userId}`);
  return data;
}
export async function postCart(
  userId: number,
): Promise<Pick<CartList, 'results'>> {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/cart/`,
    data: { userId },
  });
  return data;
}
export async function postCartItem(body: CartItem) {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/cart/item/`,
    data: body,
  });
  return data;
}
