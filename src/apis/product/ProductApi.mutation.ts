import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import { getProduct } from './ProductApi';

export const useGetProductItemMutation = (
  params?: MutationHookParams<typeof getProduct>,
) => {
  return useMutation(getProduct, {
    ...params?.options,
  });
};
