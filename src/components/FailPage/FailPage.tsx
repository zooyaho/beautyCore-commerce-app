import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Center, Flex, Text } from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

function FailPage() {
  console.log('❌tposspay fail page!!!');
  const { query } = useRouter();
  return (
    <Flex
      h="90vh"
      pt="3rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text as="h2" fontSize="24px" mb="1rem" textAlign="center">
        주문이 정상적으로
        <br />
        <strong>완료되지 않았습니다.</strong>
      </Text>
      <Text color="gray.600" mb="2rem">
        이용에 불편을 드려 죄송합니다.
      </Text>
      <Flex
        flexDirection="column"
        alignItems="left"
        justifyContent="center"
        bgColor="gray.100"
        w="80%"
        p="2rem"
        textStyle="ss_wb_cg700"
      >
        <Flex>
          <Text>결제 실패 사유: </Text>
          <Text color="primary.600" ml=".5rem">
            {query.message}
          </Text>
        </Flex>
        <Flex>
          <Text>결제 번호: </Text>
          <Text ml=".5rem">{query.orderId}</Text>
        </Flex>
        <Text mt="1rem">확인 후 장바구니에서 다시 주문해주세요.</Text>
      </Flex>
      <Flex w="100%" gap="1rem" flexDirection="column" alignItems="center">
        <Button variant="primaryButton" size="lg" w="60%" mt="2rem">
          <Link href={ROUTES.CART}>
            <Center as="a" w="100%" h="100%">
              장바구니로 가기
            </Center>
          </Link>
        </Button>
        <Button variant="whiteButton" size="lg" w="60%">
          <Link href={ROUTES.HOME}>
            <Center as="a" w="100%" h="100%">
              홈으로 이동
            </Center>
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
}

export default FailPage;
