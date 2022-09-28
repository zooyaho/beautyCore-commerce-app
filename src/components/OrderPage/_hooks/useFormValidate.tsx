import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  username: string;
  phone: string;
  adress: string;
  adressDetail: string;
  orderUsername: string;
  orderPhone: string;
  orderAdress: string;
  orderAdressDetail: string;
  orderRequest: string;
  paymentMethod: string;
  personalConsent: string;
};

/**
 * yup 을 이용하여 form의 유효성 검사를 도와줍니다.
 * react-hook-form과 yup을 연결해 줄 yupResolver 을 함께 사용합니다.
 *
 * validation에 반복되는 값은 상수로 빼서 관리합니다.
 *
 *
 *
 * @see https://github.com/jquense/yup#getting-started
 * @see https://yarnpkg.com/package/@hookform/resolvers#readme
 * */

export const signupFormSchema = yup.object().shape({
  username: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '최소 2자 이상 입력해주세요.'),
  phone: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test('isNumber', '정확한 핸드폰 번호를 입력해주세요.', (val) => {
      return !Number.isNaN(Number(val));
    })
    .min(10, '정확한 핸드폰 번호를 입력해주세요.')
    .max(13, '정확한 핸드폰 번호를 입력해주세요.'),
  adress: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '정확한 주소를 입력해주세요.'),
  adressDetail: yup.string(),
  orderUsername: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '최소 2자 이상 입력해주세요.'),
  orderPhone: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test('isNumber', '정확한 핸드폰 번호를 입력해주세요.', (val) => {
      return !Number.isNaN(Number(val));
    })
    .min(10, '정확한 핸드폰 번호를 입력해주세요.')
    .max(13, '정확한 핸드폰 번호를 입력해주세요.'),
  orderAdress: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '정확한 주소를 입력해주세요.'),
  orderAdressDetail: yup.string(),
  orderRequest: yup.string(),
  paymentMethod: yup.string().required('결제수단을 선택해 주세요.'),
  personalConsent: yup
    .string()
    .required('개인정보 수집 이용 동의를 체크해주세요.'),
});

const useFormValidate = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(signupFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useFormValidate;
