import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import { postCart } from './CartApi';

export const usePostCartMutation = (
  params?: MutationHookParams<typeof postCart>,
) => {
  return useMutation(postCart, {
    ...params?.options,
  });
};
export const usePostCartItemMutation = (
  params?: MutationHookParams<typeof postCart>,
) => {
  return useMutation(postCart, {
    ...params?.options,
  });
};
