import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  username: string;
  phone: string;
  address: string;
  addressDetail: string;
  orderUsername: string;
  orderPhone: string;
  orderAddress: string;
  orderAddressDetail: string;
  orderRequest: string;
  paymentMethod: string;
  personalConsent: string;
};

export const orderFormSchema = yup.object().shape({
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
  address: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '정확한 주소를 입력해주세요.'),
  addressDetail: yup.string(),
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
  orderAddress: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, '정확한 주소를 입력해주세요.'),
  orderAddressDetail: yup.string(),
  orderRequest: yup.string(),
  paymentMethod: yup.string().required('결제수단을 선택해 주세요.'),
  personalConsent: yup
    .string()
    .required('개인정보 수집 이용 동의를 체크해주세요.'),
});

const useFormValidate = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(orderFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useFormValidate;
