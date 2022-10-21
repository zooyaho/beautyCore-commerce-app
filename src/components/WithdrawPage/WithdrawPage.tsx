import React from 'react';
import { useDispatch } from 'react-redux';

import { useDisclosure } from '@chakra-ui/react';

import {
  useDeleteWithdrawalMutation,
  usePostWithdrawalReasonMutation,
} from '@apis/user/userApi.mutation';
import { useGetUserMe } from '@apis/user/userApi.query';
import { userSliceActions } from '@features/user/userSlice';

import { deleteToken } from '@utils/localStorage/token';

import WithdrawPageView from './WithdrawPage.view';
import useFormValidate from './_hooks/useFormValidate';

const ReviewWritePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  const { data: userData } = useGetUserMe();
  const dispatch = useDispatch();

  const { mutateAsync: deleteMutate } = useDeleteWithdrawalMutation({
    options: {
      onSuccess: () => {
        onOpen();
        deleteToken();
        dispatch(userSliceActions.setIsLogged(false));
      },
    },
  });
  const { mutateAsync: ReasonMutate } = usePostWithdrawalReasonMutation();

  const onSubmit = handleSubmit(async ({ reason, additionalReason }) => {
    try {
      await ReasonMutate({ reason, additionalReason });
      if (userData) await deleteMutate(userData.id);
    } catch (e) {
      console.error(e);
    }
  });
  return (
    <WithdrawPageView
      formData={formData}
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default ReviewWritePage;
