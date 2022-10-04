import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  starRating: number;
  content: string;
};

export const reviewWriteFormSchema = yup.object().shape({
  starRating: yup.number().required('별점 항목은 필수 입니다.'),
  content: yup
    .string()
    .required('리뷰 작성은 필수 입니다.')
    .min(10, '최소 10자 이상 입력해주세요.'),
});

const useFormValidate = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(reviewWriteFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useFormValidate;
