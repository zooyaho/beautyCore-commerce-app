import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import {
  deleteCartItem,
  getCart,
  patchCartItem,
  postCart,
  postCartItem,
} from './CartApi';

export const useGetCartMutation = (
  params?: MutationHookParams<typeof getCart>,
) => {
  return useMutation(getCart, {
    ...params?.options,
  });
};
export const usePostCartMutation = (
  params?: MutationHookParams<typeof postCart>,
) => {
  return useMutation(postCart, {
    ...params?.options,
  });
};
export const usePostCartItemMutation = (
  params?: MutationHookParams<typeof postCartItem>,
) => {
  return useMutation(postCartItem, {
    ...params?.options,
  });
};
export const usePatchCartItemMutation = (
  params?: MutationHookParams<typeof patchCartItem>,
) => {
  return useMutation(patchCartItem, {
    ...params?.options,
  });
};
export const useDeleteCartItemMutation = (
  params?: MutationHookParams<typeof deleteCartItem>,
) => {
  return useMutation(deleteCartItem, {
    ...params?.options,
  });
};
