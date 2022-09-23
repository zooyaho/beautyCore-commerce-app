import React from 'react';
import { ChakraProps, Button, Flex, Text, Center, Spacer } from '@chakra-ui/react';
import { HandsClappingIcon } from 'generated/icons/MyIcons';

interface SignUpDonePageProps extends ChakraProps { }

function SignUpDonePage({ ...basisProps }: SignUpDonePageProps) {
  return (
    <Flex as='main' h='100vh' px='1rem' flexDirection='column'>
      <Text as='h2' textStyle='xl' fontWeight='bold' pt='80px'>회원가입이<br />
        완료되었습니다.</Text>
      <Text as='p' mt='5px' textStyle='sm' color='gray.600'>관심사별로 자유롭게 소통해보세요!</Text>
      <Spacer />
      <Center position='absolute' top='35vh' left='0' right='0'>
        <HandsClappingIcon />
      </Center>
      <Spacer />
      <Button w='100%' size='lg' fontWeight='bold' borderRadius='25px' mb='1.875rem' colorScheme='primary' >
        시작하기
      </Button>
    </Flex>
  );
}

export default SignUpDonePage;
