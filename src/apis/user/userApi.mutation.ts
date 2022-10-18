import { MutationHookParams } from '@apis/type';

import { useMutation } from '@tanstack/react-query';

import {
  PostUserWithdrawalReason,
  deleteUserWithdrawal,
  putUserMe,
} from './userApi';

export const usePutUserMeMutation = (
  params?: MutationHookParams<typeof putUserMe>,
) => {
  return useMutation(putUserMe, {
    ...params?.options,
  });
};
export const usePostWithdrawalReasonMutation = (
  params?: MutationHookParams<typeof PostUserWithdrawalReason>,
) => {
  return useMutation(PostUserWithdrawalReason, {
    ...params?.options,
  });
};
export const useDeleteWithdrawalMutation = (
  params?: MutationHookParams<typeof deleteUserWithdrawal>,
) => {
  return useMutation(deleteUserWithdrawal, {
    ...params?.options,
  });
};
