import React, { useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';

import { usePutUserMeMutation } from '@apis/user/userApi.mutation';
import useAppStore from '@features/useAppStore';

import EditUserInfoPageView from './EditUserInfoPage.view';
import useFormValidate from './_hooks/useFormValidate';

const EditUserInfoPage = () => {
  const { onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  const { id } = useAppStore((store) => store.USER);

  const { mutate } = usePutUserMeMutation({
    options: {
      onSuccess: () => {
        setIsOpen(true);
      },
      onError: () => {
        setIsOpen(false);
      },
    },
  });

  const onSubmit = handleSubmit(
    ({ username, nickname, email, phone, gender, age }) => {
      console.log(
        `submitted: ${username}, ${nickname}, ${email}, ${phone}, ${gender}, ${age}`,
      );
      if (id) {
        mutate({
          name: username,
          nickname,
          email,
          phone,
          gender,
          age,
          id,
          profile: 'www.naver.com',
        });
      }
    },
  );

  return (
    <EditUserInfoPageView
      formData={formData}
      onSubmit={onSubmit}
      onOpen={onOpen}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default EditUserInfoPage;
