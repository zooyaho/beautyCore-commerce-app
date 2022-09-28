import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  Input,
  Link,
  Select,
  Text,
} from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

import { LAYOUT } from '@constants/layout';

import { FormDataType } from './_hooks/useFormValidate';

import { UserProfileIcon } from 'generated/icons/MyIcons';

interface IUserInfo {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  profile: string;
  gender: string;
  age: number;
}

const DUMMY_USER = {
  name: '박지우',
  nickname: 'zooyaho',
  phone: '010-7366-1268',
  email: 'zooyaho@naver.com',
  profile: '/',
  gender: 'female',
  age: 10,
};

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const FormPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: FormPageProps) => {
  return (
    <>
      <Container as="main" pt={LAYOUT.HEADER.HEIGHT}>
        <Text as="h2" textStyle="lg" fontWeight="bold" mt="1.6rem">
          회원정보수정
        </Text>
        {/* s: Form */}
        <Box as="form" onSubmit={onSubmit} {...basisProps}>
          {/* 회원정보입력 */}
          <Box mb="5rem">
            <Flex justifyContent="center" mt="3.75rem" mb="2.5rem">
              <UserProfileIcon />
            </Flex>
            <FormHelper
              mb="3.125rem"
              label="이름"
              errorText={errors.username?.message}
            >
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('username')}
                autoComplete="off"
                placeholder="홍길동"
                value={DUMMY_USER.name}
              />
            </FormHelper>
            <FormHelper
              mb="3.125rem"
              label="닉네임"
              errorText={errors.nickname?.message}
            >
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('nickname')}
                autoComplete="off"
                placeholder="길동이"
                value={DUMMY_USER.nickname}
              />
            </FormHelper>
            <FormHelper
              mb="3.125rem"
              label="핸드폰 번호"
              errorText={errors.phone?.message}
            >
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('phone')}
                autoComplete="off"
                placeholder="010-1234-1234"
                value={DUMMY_USER.phone}
              />
            </FormHelper>
            <FormHelper
              mb="3.125rem"
              label="이메일 주소"
              errorText={errors.email?.message}
            >
              <Input
                borderRadius="100px"
                size="md"
                borderColor="black"
                {...register('email')}
                autoComplete="off"
                placeholder="gildong123@gmail.com"
                value={DUMMY_USER.email}
              />
            </FormHelper>
          </Box>

          {/* 추가정보입력 */}
          <Box mb="5rem">
            <Text as="h3" textStyle="md" fontWeight="bold" mb="2.5rem">
              추가정보입력
            </Text>
            <Controller
              control={control}
              name="gender"
              render={({ field: { onChange } }) => (
                <FormHelper
                  mb="40px"
                  label="성별"
                  outline="none"
                  errorText={errors.gender?.value?.message}
                >
                  <Select
                    variant="flushed"
                    iconColor="black"
                    iconSize="3rem"
                    focusBorderColor="primary.500"
                    onChange={onChange}
                    placeholder="성별을 선택하세요"
                    defaultValue={DUMMY_USER.gender}
                  >
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                  </Select>
                </FormHelper>
              )}
            />
            <Controller
              control={control}
              name="age"
              render={({ field: { onChange } }) => (
                <FormHelper
                  mb="40px"
                  border="none"
                  label="연령대"
                  errorText={errors.gender?.value?.message}
                >
                  <Select
                    variant="flushed"
                    iconColor="black"
                    iconSize="3rem"
                    focusBorderColor="primary.500"
                    onChange={onChange}
                    placeholder="연령대를 선택하세요"
                    defaultValue={DUMMY_USER.age}
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50대 이상</option>
                  </Select>
                </FormHelper>
              )}
            />
          </Box>

          <Flex pt="1rem" pb="2rem" gap=".7rem">
            <Button
              type="button"
              size="lg"
              fontSize="md"
              borderRadius="25px"
              textColor="primary.500"
              flexGrow="1"
              variant="whiteButton"
            >
              <Link href="/">취소</Link>
            </Button>
            <Button
              type="button"
              size="lg"
              fontSize="md"
              fontWeight="bold"
              borderRadius="25px"
              colorScheme="primary"
              flexGrow="1"
            >
              <Link href="/">저장</Link>
            </Button>
          </Flex>
        </Box>
        {/* e: Form */}
      </Container>
    </>
  );
};

export default FormPageView;
