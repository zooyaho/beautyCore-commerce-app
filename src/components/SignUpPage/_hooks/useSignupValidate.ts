import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  username: string;
  nickname: string;
  phone: string;
  email: string;
  gender: string;
  age: number;
};

export const signupFormSchema = yup.object().shape({
  username: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '최소 2자 이상 입력해주세요.'),
  nickname: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test(
      'validate',
      '한글 1~5자, 영문 및 숫자 2~10자 사이로 입력해주세요.',
      (val) => {
        const enNumRegExp = /^[a-zA-z0-9]{2,10}$/;
        const koRegExp = /^[ㄱ-ㅎ|가-힣]{1,5}$/;
        if (val && !(enNumRegExp.test(val) || koRegExp.test(val))) {
          return false;
        }
        return true;
      },
    ),
  phone: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test('isNumber', '정확한 핸드폰 번호를 입력해주세요.', (val) => {
      return !Number.isNaN(Number(val));
    })
    .min(10, '정확한 핸드폰 번호를 입력해주세요.')
    .max(13, '정확한 핸드폰 번호를 입력해주세요.'),
  email: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .email('이메일 주소를 정확하게 입력해주세요.'),
  gender: yup.string().required('해당 항목은 필수 입니다.'),
  age: yup.number().required('해당 항목은 필수 입니다.'),
});

const useFormValidate = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(signupFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useFormValidate;
