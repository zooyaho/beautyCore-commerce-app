import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useDisclosure } from '@chakra-ui/react';

import {
  useDeleteWithdrawalMutation,
  usePostWithdrawalReasonMutation,
} from '@apis/user/userApi.mutation';
import useAppStore from '@features/useAppStore';
import { userSliceActions } from '@features/user/userSlice';

import WithdrawPageView from './WithdrawPage.view';
import useFormValidate from './_hooks/useFormValidate';

const ReviewWritePage = () => {
  const { onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  const formData = useFormValidate();
  const { handleSubmit } = formData;

  const [isDelMutate, setIsDelMutate] = useState(false);
  const [isReasonMutate, setIsReasonMutate] = useState(false);
  const { id } = useAppStore((store) => store.USER);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDelMutate && isReasonMutate) {
      dispatch(userSliceActions.deleteUserId);
      dispatch(userSliceActions.setIsLogged(false));
    }
  }, [isDelMutate, isReasonMutate, dispatch]);

  const { mutate: deleteMutate } = useDeleteWithdrawalMutation({
    options: {
      onSuccess: () => {
        setIsOpen(true);
        setIsDelMutate(true);
        setIsReasonMutate(true);
        console.log('회원 삭제 완료');
      },
      onError: () => {
        setIsOpen(false);
        setIsDelMutate(false);
        setIsReasonMutate(false);
      },
    },
  });

  const { mutate: ReasonMutate } = usePostWithdrawalReasonMutation({
    options: {
      onSuccess: () => {
        setIsOpen(true);
        setIsDelMutate(true);
        setIsReasonMutate(true);
        console.log('탈퇴사유 전송 완료');
      },
      onError: () => {
        setIsOpen(false);
        setIsDelMutate(false);
        setIsReasonMutate(false);
      },
    },
  });

  const onSubmit = handleSubmit(({ reason, requireText, additionalReason }) => {
    console.log(`submitted: ${reason},  ${requireText}, ${additionalReason} `);
    if (id) deleteMutate(id);
    ReasonMutate({ reason, additionalReason });
  });
  return (
    <WithdrawPageView
      formData={formData}
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    />
  );
};

export default ReviewWritePage;
