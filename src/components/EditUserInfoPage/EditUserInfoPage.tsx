import React, { useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';

import { usePutUserMeMutation } from '@apis/user/userApi.mutation';
import { useGetUserMe } from '@apis/user/userApi.query';

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
    <EditUserInfoPageView
      formData={formData}
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default EditUserInfoPage;
