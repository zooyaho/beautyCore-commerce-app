import { useRouter } from 'next/router';
import React from 'react';

import { postUserRegister } from '@apis/user/userApi';

import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { setToken } from '@utils/localStorage/token';

import SignupPageView from './SignUpPage.view';
import useFormValidate from './_hooks/useSignupValidate';

const SignUpPage = () => {
  const { query, push } = useRouter();
  const formData = useFormValidate();
  const { handleSubmit, reset } = formData;

  const onSubmit = handleSubmit(
    ({ username, nickname, email, phone, gender, age }) => {
      console.log(
        `submitted: ${username}, ${nickname}, ${email}, ${phone},${typeof gender}, ${gender},${typeof age}, ${age}`,
      );
      postUserRegister({
        socialToken: query.token,
        name: username,
        nickname,
        email,
        phone,
        gender,
        age,
        profilePath: 'www.naver.com',
        marketingAdAgree: true,
      })
        .then((data) => {
          setToken(data);
          push('/sign-up-done');
        })
        .catch((e) => console.error('회원가입 에러', e));
      reset();
    },
  );

  return (
    <>
      <SignupPageView formData={formData} onSubmit={onSubmit} />
      {!query.token && <AuthRouteModal authStatus={AUTH_STATUS.LOGIN} />}
    </>
  );
};

export default SignUpPage;
