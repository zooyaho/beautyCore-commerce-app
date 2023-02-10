import React, { useEffect, useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';

import { usePutUserMeMutation } from '@apis/user/userApi.mutation';
import { useGetUserMe } from '@apis/user/userApi.query';

import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { UserType, getUser } from '@utils/localStorage/user';

import EditUserInfoPageView from './EditUserInfoPage.view';
import useFormValidate from './_hooks/useFormValidate';

const EditUserInfoPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  const { data: userData } = useGetUserMe();
  const { mutate } = usePutUserMeMutation({
    options: {
      onSuccess: () => {
        onOpen();
      },
    },
  });

  const [userStatus, setUserStatus] = useState<UserType | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setUserStatus(getUser());
    }
  }, []);

  const onSubmit = handleSubmit(
    ({ username, nickname, email, phone, gender, age }) => {
      console.log(
        `submitted: ${username}, ${nickname}, ${email}, ${phone}, ${gender}, ${age}`,
      );
      if (userData) {
        mutate({
          name: username,
          nickname,
          email,
          phone,
          gender,
          age,
          id: userData.id,
          profile: 'www.naver.com',
        });
      }
    },
  );

  return (
    <>
      {!userStatus ? (
        <AuthRouteModal authStatus={AUTH_STATUS.LOGOUT} />
      ) : (
        <EditUserInfoPageView
          formData={formData}
          onSubmit={onSubmit}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default EditUserInfoPage;
