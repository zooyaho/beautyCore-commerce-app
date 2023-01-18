import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

import { AxiosError } from 'axios';

import { Button, Center, Flex, Spacer, Text, useToast } from '@chakra-ui/react';

import { getUserMe } from '@apis/user/userApi';

import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { ROUTES } from '@constants/routes';
import { UserType, getUser, setUser } from '@utils/localStorage/user';

import { HandsClappingIcon } from '@components/common/@Icons/MyIcons';

function SignUpDonePage() {
  const toast = useToast();
  const [userStatus, setUserStatus] = useState<UserType | null>();
  useEffect(() => {
    if (typeof window !== undefined) {
      setUserStatus(getUser());
    }
  }, []);

  const setUserDataHandler = useCallback(async () => {
    try {
      const userData = await getUserMe();
      if (userData)
        setUser({ user_id: userData.id, auth_status: AUTH_STATUS.LOGIN });
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) {
        if (response.status.toString().slice(0, 1) === '4')
          toast({
            title: response,
            description: '재시도 부탁드립니다.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        else if (response.status.toString().slice(0, 1) === '5')
          toast({
            title: response,
            description: '서버가 불안정합니다. 재시도 부탁드립니다.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
      }
    }
  }, [toast]);

  return (
    <>
      <Flex as="main" h="100vh" px="1rem" flexDirection="column">
        <Text as="h2" textStyle="sxl_wb" pt="80px">
          회원가입이
          <br />
          완료되었습니다.
        </Text>
        <Text as="p" mt="5px" textStyle="sm_wn_cg600">
          관심사별로 자유롭게 소통해보세요!
        </Text>
        <Spacer />
        <Center position="absolute" top="35vh" left="0" right="0">
          <HandsClappingIcon />
        </Center>
        <Spacer />
        <Button
          size="lg"
          variant="primaryButton"
          mb="1.875rem"
          onClick={setUserDataHandler}
        >
          <Link href={ROUTES.HOME}>
            <Center as="a" w="100%" h="100%">
              시작하기
            </Center>
          </Link>
        </Button>
      </Flex>
      {userStatus && <AuthRouteModal authStatus={AUTH_STATUS.LOGIN} />}
    </>
  );
}

export default SignUpDonePage;
