import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { LAYOUT } from '@constants/layout';
import { MY_IMAGES } from '@image';
import { CheckLineIcon, CircleCheckIcon, UserProfileIcon } from 'generated/icons/MyIcons';

import {
  Box,
  BoxProps,
  Button,
  Flex,
  Input,
  Text,
  Image,
  Heading,
  Container,
  Select,
  Spacer,
  Link
} from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

import { FormDataType } from './_hooks/useFormValidate';

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
      <Box as='header' height={LAYOUT.HEADER.HEIGHT} position='absolute' top='0' right='0' left='0'>
        <Flex alignItems='center' h='inherit' ml='1rem'>
          <Image src={MY_IMAGES.ICONS.LOGO.src} alt={MY_IMAGES.ICONS.LOGO.alt} />
        </Flex>
      </Box>
      <Container as='main' mt={LAYOUT.HEADER.HEIGHT}>
        <Heading as='h2' size='lg' mt='1.6rem'>회원가입</Heading>
        {/* s: Form */}
        <Box as="form" onSubmit={onSubmit} {...basisProps}>

          {/* 회원정보입력 */}
          <Box mb='5rem'>
            <Heading as='h3' fontSize='16px' mt='3.75rem'>회원정보입력</Heading>
            <Flex justifyContent='center' my='2.5rem'>
              <UserProfileIcon />
            </Flex>
            <FormHelper mb="3.125rem" label="이름" errorText={errors.username?.message}>
              <Input size='md'
                borderColor='black' {...register('username')} autoComplete="off" placeholder='홍길동' />
            </FormHelper>
            <FormHelper mb="3.125rem" label="닉네임" errorText={errors.nickname?.message}>
              <Input size='md'
                borderColor='black' {...register('nickname')} autoComplete="off" placeholder='길동이' />
            </FormHelper>
            <FormHelper mb="3.125rem" label="핸드폰 번호" errorText={errors.phone?.message}>
              <Input size='md'
                borderColor='black' {...register('phone')} autoComplete="off" placeholder='010-1234-1234' />
            </FormHelper>
            <FormHelper mb='3.125rem' label="이메일 주소" errorText={errors.email?.message}>
              <Input size='md'
                borderColor='black' {...register('email')} autoComplete="off" placeholder='gildong123@gmail.com' />
            </FormHelper>
          </Box>

          {/* 추가정보입력 */}
          <Box mb='5rem'>
            <Heading as='h3' fontSize='md' mb='2.5rem'>추가정보입력</Heading>
            <Controller
              control={control}
              name="gender"
              render={({ field: { onChange } }) => (
                <FormHelper
                  mb="40px"
                  label="성별"
                  outline='none'
                  errorText={errors.gender?.value?.message}
                >
                  <Select
                    variant='flushed'
                    // isSearchable={false} 
                    // color='gray.500'
                    iconColor='black'
                    iconSize='3rem'
                    focusBorderColor='primary.500'
                    onChange={onChange}
                    placeholder="성별을 선택하세요"
                  >
                    <option value='men'>남자</option>
                    <option value='women'>여자</option>
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
                  border='none'
                  label="연령대"
                  errorText={errors.gender?.value?.message}
                >
                  <Select
                    variant='flushed'
                    // isSearchable={false} 
                    // color='gray.500'
                    iconColor='black'
                    iconSize='3rem'
                    focusBorderColor='primary.500'
                    onChange={onChange}
                    placeholder="연령대를 선택하세요"
                  >
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
                    <option value='40'>40</option>
                    <option value='50'>50대 이상</option>
                  </Select>
                </FormHelper>
              )}
            />
          </Box>

          {/* s: 이용약관동의 */}
          <Box mb='5rem'>
            <Heading as='h3' fontSize='md' mb='2.5rem'>이용약관동의</Heading>

            {/* 모든 동의 버튼 */}
            <Flex alignItems='center' borderBottom='2px solid' borderBottomColor='primary.500'>
              <Text as='p' fontSize='md' color='primary.500' fontWeight='bold'>아래 약관에 모두 동의합니다.</Text>
              <Spacer />
              <Button rightIcon={<CircleCheckIcon />} colorScheme="transparent" border='none'
                sx={{ "svg:hover path": { stroke: "primary.500" } }}
                _hover={{ background: "transparent" }} px='0' />
            </Flex>

            <Flex alignItems='center' mt='37px' mb='1rem'>
              <Link textStyle='sm' color='gray.600' textDecoration='underline' _hover={{ textDecoration: "underline" }} href='https://toktokhan.notion.site/6e7a309e8d14464cad38fc86656d564a' isExternal>서비스 이용을 위한 필수약관 동의</Link>
              <Spacer />
              <Button rightIcon={<CheckLineIcon />} sx={{ "svg:hover path": { stroke: "primary.500" } }} colorScheme="transparent" border='none'
                _hover={{ background: "transparent" }} px='0' />
            </Flex>
            <Flex alignItems='center' my='1rem'>
              <Link textStyle='sm' color='gray.600' textDecoration='underline' _hover={{ textDecoration: "underline" }} href='https://toktokhan.notion.site/3-2261ee2f25024c0a9b6a82a6f43fd0dc' isExternal>개인정보수집 및 이용, 제3자 제공 동의</Link>
              <Spacer />
              <Button rightIcon={<CheckLineIcon />} sx={{ "svg:hover path": { stroke: "primary.500" } }} colorScheme="transparent" border='none'
                _hover={{ background: "transparent" }} px='0' />
            </Flex>
            <Flex alignItems='center' my='1rem'>
              <Link textStyle='sm' color='gray.600' textDecoration='underline' _hover={{ textDecoration: "underline" }} href='https://toktokhan.notion.site/24f69842ebec48df89a3656bac7cf4c9' isExternal>마케팅 정보 수신 및 맞춤형 광고 동의(선택)</Link>
              <Spacer />
              <Button rightIcon={<CheckLineIcon />} sx={{ "svg:hover path": { stroke: "primary.500" } }} colorScheme="transparent" border='none'
                _hover={{ background: "transparent" }} px='0' />
            </Flex>
          </Box>
          {/* e: 이용약관동의 */}

          {/* Submit Button */}
          <Button w='100%' size='lg' fontWeight='bold' borderRadius='25px' mb='3.125rem' colorScheme='primary' type="submit" >
            회원가입 완료
          </Button>

        </Box >
        {/* e: Form */}
      </Container >
    </>
  );
};

export default FormPageView;
