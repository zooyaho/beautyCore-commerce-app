import React from 'react';

import SignupPageView from './SignUpPage.view';
import useFormValidate from './_hooks/useSignupValidate';

// interface SignUpPageProps extends ChakraProps { }

const SignUpPage = () => {
  const formData = useFormValidate();
  const { handleSubmit, reset } = formData;

  const onSubmit = handleSubmit(
    ({ username, nickname, email, phone, gender, age }) => {
      console.log(
        `submitted: ${username}, ${nickname}, ${email}, ${phone}, ${gender}, ${age}`,
      );
      reset();
    },
  );
  return <SignupPageView formData={formData} onSubmit={onSubmit} />;
};

export default SignUpPage;
