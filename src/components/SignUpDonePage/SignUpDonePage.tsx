import React, { useEffect, useState } from 'react';

import { Button, Center, Flex, Link, Spacer, Text } from '@chakra-ui/react';

import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { ROUTES } from '@constants/routes';
import { UserType, getUser } from '@utils/localStorage/user';

import { HandsClappingIcon } from 'generated/icons/MyIcons';

function SignUpDonePage() {
  const [authStatus, setAuthStatus] = useState<UserType | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setAuthStatus(getUser());
    }
  }, []);

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
        <Button variant="primaryButton" mb="1.875rem">
          <Link href={ROUTES.HOME} w="100%" h="100%">
            <Flex
              as="span"
              w="100%"
              h="100%"
              alignItems="center"
              justifyContent="center"
            >
              시작하기
            </Flex>
          </Link>
        </Button>
      </Flex>
      {authStatus && authStatus.auth_status === AUTH_STATUS.LOGIN && (
        <AuthRouteModal authStatus={AUTH_STATUS.LOGIN} />
      )}
    </>
  );
}

export default SignUpDonePage;
