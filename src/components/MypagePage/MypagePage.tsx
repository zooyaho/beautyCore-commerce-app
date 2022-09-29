import Link from 'next/link';
import React from 'react';

import { Container, Divider, Flex, Text, VStack } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import {
  EditUserInfoIcon,
  MyProductReviewIcon,
  OrderHistoryIcon,
  RightArrowIcon,
} from 'generated/icons/MyIcons';

function MypagePage() {
  return (
    <>
      <Container as="main" pt={LAYOUT.HEADER.HEIGHT} pb="1.5rem">
        <Text as="h2" textStyle="lg" fontWeight="bold" mt="1.6rem">
          박지우
        </Text>
        <Text textStyle="md" textColor="gray.400">
          incourse.run@gmail.com
        </Text>
      </Container>
      <Flex
        textColor="gray.800"
        alignItems="center"
        py="2rem"
        borderTop="10px solid #F9F9F9"
        borderBottom="10px solid #F9F9F9"
      >
        <VStack flexGrow="1">
          {/* <Link href="/edit-user-info"> */}
          <EditUserInfoIcon w="41px" h="21px" color="primary.500" />
          <Text>회원정보수정</Text>
          {/* </Link> */}
        </VStack>
        <VStack flexGrow="1">
          <OrderHistoryIcon w="36px" h="33px" color="primary.500" />
          <Text>주문내역</Text>
        </VStack>
        <VStack flexGrow="1">
          <MyProductReviewIcon w="28px" h="25px" color="primary.500" />
          <Text>내 상품 리뷰</Text>
        </VStack>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" p="1rem">
        <Text>회원탈퇴</Text>
        <RightArrowIcon viewBox="24px" />
      </Flex>
      <Divider />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p="1rem"
        borderBottom="30px solid #F9F9F9"
      >
        <Text>로그아웃</Text>
        <RightArrowIcon viewBox="24px" />
      </Flex>
      <Divider />
    </>
  );
}

export default MypagePage;
