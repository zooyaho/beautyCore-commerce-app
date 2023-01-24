import React, { useEffect, useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';

import {
  useDeleteWithdrawalMutation,
  usePostWithdrawalReasonMutation,
} from '@apis/user/userApi.mutation';
import { useGetUserMe } from '@apis/user/userApi.query';

import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { deleteToken } from '@utils/localStorage/token';
import { UserType, deleteUser, getUser } from '@utils/localStorage/user';

import WithdrawPageView from './WithdrawPage.view';
import useFormValidate from './_hooks/useFormValidate';

const ReviewWritePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  const { data: userData } = useGetUserMe();
  const [userStatus, setUserStatus] = useState<UserType | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setUserStatus(getUser());
    }
  }, []);

  const { mutateAsync: deleteMutate } = useDeleteWithdrawalMutation({
    options: {
      onSuccess: () => {
        onOpen();
        deleteUser();
        deleteToken();
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
    <>
      {!userStatus ? (
        <AuthRouteModal authStatus={AUTH_STATUS.LOGOUT} />
      ) : (
        <WithdrawPageView
          formData={formData}
          onSubmit={onSubmit}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default ReviewWritePage;
