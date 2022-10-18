import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import { putUserMe } from './userApi';

export const usePutUserMeMutation = (
  params?: MutationHookParams<typeof putUserMe>,
) => {
  return useMutation(putUserMe, {
    ...params?.options,
  });
};
