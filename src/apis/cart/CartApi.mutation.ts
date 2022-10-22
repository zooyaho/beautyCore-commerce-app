import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import { postCart, postCartItem } from './CartApi';

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
