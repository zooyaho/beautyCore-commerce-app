/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { MY_IMAGES } from '@image';

import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Link,
  Select,
  Spacer,
  Text,
  useBoolean,
} from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

import { LAYOUT } from '@constants/layout';

import { FormDataType } from './_hooks/useSignupValidate';

import {
  CheckLineIcon,
  CircleCheckIcon,
  UserProfileIcon,
} from 'generated/icons/MyIcons';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const FormPageView = ({
  formData: {
    register,
    control,
    formState: { errors, isValid },
  },
  onSubmit,
  ...basisProps
}: FormPageProps) => {
  const [isAllAgreeFlag, setAllAgreeFlag] = useBoolean();
  const [isServiceAgreeFlag, setServiceAgreeFlag] = useBoolean();
  const [isPersonalInfoAgreeFlag, setPersonalInfoAgreeFlag] = useBoolean();
  const [isMarketingAgreeFlag, setMarketingAgreeFlag] = useBoolean();

  useEffect(() => {
    setServiceAgreeFlag.off();
    setPersonalInfoAgreeFlag.off();
    setMarketingAgreeFlag.off();
    if (isAllAgreeFlag) {
      setServiceAgreeFlag.on();
      setPersonalInfoAgreeFlag.on();
      setMarketingAgreeFlag.on();
    } else {
      setServiceAgreeFlag.off();
      setPersonalInfoAgreeFlag.off();
      setMarketingAgreeFlag.off();
    }
  }, [
    isAllAgreeFlag,
    setServiceAgreeFlag,
    setPersonalInfoAgreeFlag,
    setMarketingAgreeFlag,
  ]);

  return (
    <>
      <Box
        as="header"
        height={LAYOUT.HEADER.HEIGHT}
        position="absolute"
        top="0"
        right="0"
        left="0"
      >
        <Flex alignItems="center" h="inherit" ml="1rem">
          <Image
            src={MY_IMAGES.IMAGES.LOGO.src}
            alt={MY_IMAGES.IMAGES.LOGO.alt}
          />
        </Flex>
      </Box>
      <Container as="main" mt={LAYOUT.HEADER.HEIGHT}>
        <Text as="h2" textStyle="sxl_wb" mt="1.6rem">
          회원가입
        </Text>
        {/* s: Form */}
        <Box as="form" onSubmit={onSubmit} {...basisProps}>
          {/* 회원정보입력 */}
          <Box mb="5rem">
            <Text as="h3" textStyle="sm_wb" mt="3.75rem">
              회원정보입력
            </Text>
            <Flex justifyContent="center" my="2.5rem">
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
              render={({ field: { onChange } }) => {
                return (
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
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        성별을 선택하세요
                      </option>
                      <option value="male">남자</option>
                      <option value="female">여자</option>
                    </Select>
                  </FormHelper>
                );
              }}
            />
            <Controller
              control={control}
              name="age"
              render={({ field: { onChange } }) => (
                <FormHelper
                  mb="40px"
                  border="none"
                  label="연령대"
                  errorText={errors.age?.message}
                >
                  <Select
                    variant="flushed"
                    iconColor="black"
                    iconSize="3rem"
                    focusBorderColor="primary.500"
                    onChange={onChange}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      연령대를 선택하세요
                    </option>
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

          {/* s: 이용약관동의 */}
          <Box mb="5rem" textStyle="ss_wn_cg600">
            <Text as="h3" textStyle="sm_wb" mb="2.5rem">
              이용약관동의
            </Text>

            {/* 모든 동의 버튼 */}
            <Flex
              alignItems="center"
              borderBottom="2px solid"
              borderBottomColor="primary.500"
              pb=".5rem"
            >
              <Text as="p" textStyle="sm_wb_cp">
                아래 약관에 모두 동의합니다.
              </Text>
              <Spacer />
              <Button
                variant="transparentButton"
                rightIcon={
                  <CircleCheckIcon
                    boxSize="24px"
                    color={isAllAgreeFlag ? 'primary.500' : 'gray.400'}
                  />
                }
                onClick={setAllAgreeFlag.toggle}
              />
            </Flex>

            <Flex alignItems="center" mt="37px" mb="1rem">
              <Link
                textDecoration="underline"
                _hover={{ textDecoration: 'underline' }}
                href="https://toktokhan.notion.site/6e7a309e8d14464cad38fc86656d564a"
                isExternal
              >
                서비스 이용을 위한 필수약관 동의
              </Link>
              <Spacer />
              <Button
                variant="transparentButton"
                rightIcon={
                  <CheckLineIcon
                    boxSize="24px"
                    color={isServiceAgreeFlag ? 'primary.500' : 'gray.400'}
                  />
                }
                onClick={setServiceAgreeFlag.toggle}
              />
            </Flex>
            <Flex alignItems="center" my="1rem">
              <Link
                textDecoration="underline"
                _hover={{ textDecoration: 'underline' }}
                href="https://toktokhan.notion.site/3-2261ee2f25024c0a9b6a82a6f43fd0dc"
                isExternal
              >
                개인정보수집 및 이용, 제3자 제공 동의
              </Link>
              <Spacer />
              <Button
                variant="transparentButton"
                rightIcon={
                  <CheckLineIcon
                    boxSize="24px"
                    color={isPersonalInfoAgreeFlag ? 'primary.500' : 'gray.400'}
                  />
                }
                onClick={setPersonalInfoAgreeFlag.toggle}
              />
            </Flex>
            <Flex alignItems="center" my="1rem">
              <Link
                textDecoration="underline"
                _hover={{ textDecoration: 'underline' }}
                href="https://toktokhan.notion.site/24f69842ebec48df89a3656bac7cf4c9"
                isExternal
              >
                마케팅 정보 수신 및 맞춤형 광고 동의(선택)
              </Link>
              <Spacer />
              <Button
                variant="transparentButton"
                rightIcon={
                  <CheckLineIcon
                    boxSize="24px"
                    color={isMarketingAgreeFlag ? 'primary.500' : 'gray.400'}
                  />
                }
                onClick={setMarketingAgreeFlag.toggle}
              />
            </Flex>
          </Box>
          {/* e: 이용약관동의 */}

          {/* Submit Button */}
          <Button
            size="lg"
            mb="3.125rem"
            type="submit"
            disabled={
              isValid &&
                ((isServiceAgreeFlag &&
                  isPersonalInfoAgreeFlag &&
                  isMarketingAgreeFlag) ||
                  isAllAgreeFlag)
                ? false
                : true
            }
            variant="primaryButton"
          >
            회원가입 완료
          </Button>
        </Box>
        {/* e: Form */}
      </Container>
    </>
  );
};

export default FormPageView;
