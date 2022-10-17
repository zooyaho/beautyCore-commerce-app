import React from 'react';

import { Button, Center, Flex, Link, Spacer, Text } from '@chakra-ui/react';

import { HandsClappingIcon } from 'generated/icons/MyIcons';

function SignUpDonePage() {
  return (
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
        <Link href="/home" w="100%" h="100%">
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
  );
}

export default SignUpDonePage;
