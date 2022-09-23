import React from 'react';

import { ChakraProps } from '@chakra-ui/react';

import SignupPageView from './SignUpPage.view';
import useFormValidate from './_hooks/useFormValidate';

interface SignUpPageProps extends ChakraProps { }

const SignUpPage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;

  const onSubmit = handleSubmit(({ username, nickname, email, phone, gender, age }) => {
    console.log(
      `submitted: ${username}, ${nickname}, ${email}, ${phone}, ${gender.value}, ${age}`,
    );
  });
  return <SignupPageView formData={formData} onSubmit={onSubmit} />;
};

export default SignUpPage;
