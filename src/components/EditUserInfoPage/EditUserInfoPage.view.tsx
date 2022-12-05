import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Center,
  CircularProgress,
  Container,
  Flex,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';

import { useGetUserMe } from '@apis/user/userApi.query';

import FormHelper from '@components/common/FormHelper';

import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';

import ModifyInfoModal from './_fragments/ModifyInfoDoneModal';
import { FormDataType } from './_hooks/useFormValidate';

import { UserProfileIcon } from 'generated/icons/MyIcons';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
  isOpen: boolean;
  onClose: () => void;
}

const FormPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
  },
  onSubmit,
  isOpen,
  onClose,
  ...basisProps
}: FormPageProps) => {
  const { data: userData, isLoading } = useGetUserMe();

  useEffect(() => {
    if (userData) {
      setValue('username', userData.name);
      setValue('nickname', userData.nickname);
      setValue('phone', userData.phone);
      setValue('email', userData.email);
      setValue('gender', userData.gender);
      setValue('age', userData.age);
    }
  }, [setValue, userData]);

  return (
    <>
      {isLoading || !userData ? (
        <Center h="100vh">
          <CircularProgress isIndeterminate color="primary.500" />
        </Center>
      ) : (
        <>
          <Container pt={LAYOUT.HEADER.HEIGHT}>
            <Text as="h2" textStyle="sl_wb" mt="1.6rem">
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
                  />
                </FormHelper>
              </Box>

              {/* 추가정보입력 */}
              <Box mb="5rem">
                <Text as="h3" textStyle="sm_wb" mb="2.5rem">
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
                      errorText={errors.gender?.message}
                    >
                      <Select
                        variant="flushed"
                        iconColor="black"
                        iconSize="3rem"
                        focusBorderColor="primary.500"
                        onChange={onChange}
                        defaultValue={userData?.gender}
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
                      errorText={errors.gender?.message}
                    >
                      <Select
                        variant="flushed"
                        iconColor="black"
                        iconSize="3rem"
                        focusBorderColor="primary.500"
                        onChange={onChange}
                        defaultValue={userData?.age}
                      >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                        <option value={50}>50대 이상</option>
                      </Select>
                    </FormHelper>
                  )}
                />
              </Box>
              {/* 버튼 */}
              <Flex pt="1rem" pb="2rem" gap=".7rem">
                <Button
                  type="button"
                  size="lg"
                  flexGrow="1"
                  variant="whiteButton"
                >
                  <Link href={ROUTES.MYPAGE}>
                    <Center as="a" w="100%" h="100%">
                      취소
                    </Center>
                  </Link>
                </Button>
                <Button
                  type="submit"
                  variant="primaryButton"
                  size="lg"
                  flexGrow="1"
                >
                  저장
                </Button>
                <ModifyInfoModal onClose={onClose} isOpen={isOpen} />
              </Flex>
            </Box>
            {/* e: Form */}
          </Container>
        </>
      )}
    </>
  );
};

export default FormPageView;
