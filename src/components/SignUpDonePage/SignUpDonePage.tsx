import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';

import { HandsClappingIcon } from '@components/common/@Icons/MyIcons';
import AuthRouteModal from '@components/common/AuthRouteModal';

import { AUTH_STATUS } from '@constants/authStatus';
import { ROUTES } from '@constants/routes';

function SignUpDonePage() {
  const { query } = useRouter();

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
        <Button size="lg" variant="primaryButton" mb="1.875rem">
          <Link href={ROUTES.LOGIN}>
            <Center as="a" w="100%" h="100%">
              시작하기
            </Center>
          </Link>
        </Button>
      </Flex>
      {!query.access && <AuthRouteModal authStatus={AUTH_STATUS.LOGIN} />}
    </>
  );
}

export default SignUpDonePage;
