import instance from '@apis/_axios/instance';

import { CartCount, CartItem, CartItemId, CartList } from './CartApi.type';

export async function getCart(userId: number): Promise<CartList> {
  const { data } = await instance(`/v1/cart/?user_id=${userId}`);
  console.log(data);
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
export async function getCartItem(id: number): Promise<CartCount> {
  const { data } = await instance(`/v1/cart/item/${id}/`);
  return data;
}
export async function postCartItem(body: Partial<CartItem>) {
  const { data } = await instance({
    method: 'POST',
    url: `/v1/cart/item/`,
    data: body,
  });
  return data;
}
export async function patchCartItem(body: Partial<CartItemId>) {
  const { data } = await instance({
    method: 'PATCH',
    url: `/v1/cart/item/${body.id}/`,
    data: { count: body.count },
  });
  return data;
}
export async function deleteCartItem(id: number) {
  const { data } = await instance({
    method: 'DELETE',
    url: `/v1/cart/item/${id}/`,
  });
  return data;
}
