import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  Center,
  CircularProgress,
  Container,
  Divider,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import { useGetUserMe } from '@apis/user/userApi.query';
import { userSliceActions } from '@features/user/userSlice';

import { LAYOUT } from '@constants/layout';
import { deleteToken } from '@utils/localStorage/token';

import LogoutModal from './_fragments/LogoutModal';

import {
  EditUserInfoIcon,
  MyProductReviewIcon,
  OrderHistoryIcon,
  RightArrowIcon,
} from 'generated/icons/MyIcons';

function MypagePage() {
  const { data: userData, isLoading } = useGetUserMe();
  const { onOpen, isOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const userStoreClearHandler = () => {
    dispatch(userSliceActions.setIsLogged(false));
    deleteToken();
  };

  return (
    <>
      {isLoading || !userData ? (
        <Center h="100vh">
          <CircularProgress isIndeterminate color="primary.500" />
        </Center>
      ) : (
        <>
          <Container pt={LAYOUT.HEADER.HEIGHT} pb="1.5rem">
            <Text as="h2" mt="1.6rem" textStyle="sl_wb">
              {userData.name}
            </Text>
            <Text textStyle="sm_wn" textColor="gray.400">
              {userData.email}
            </Text>
          </Container>
          <Flex
            alignItems="center"
            py="2rem"
            borderTop="10px solid #F9F9F9"
            borderBottom="10px solid #F9F9F9"
          >
            <Box flexGrow="1" cursor="pointer">
              <Link href="/edit-user-info">
                <VStack>
                  <Center w="50px" h="50px">
                    <EditUserInfoIcon w="41px" h="21px" color="primary.500" />
                  </Center>
                  <Text>회원정보수정</Text>
                </VStack>
              </Link>
            </Box>
            <Box flexGrow="1" cursor="pointer">
              <Link href="/order-history">
                <VStack>
                  <Center w="50px" h="50px">
                    <OrderHistoryIcon w="36px" h="33px" color="primary.500" />
                  </Center>
                  <Text>주문내역</Text>
                </VStack>
              </Link>
            </Box>
            <Box flexGrow="1" cursor="pointer">
              <Link href="/my-product-review">
                <VStack>
                  <Center w="50px" h="50px">
                    <MyProductReviewIcon
                      w="28px"
                      h="25px"
                      color="primary.500"
                    />
                  </Center>
                  <Text>내 상품 리뷰</Text>
                </VStack>
              </Link>
            </Box>
          </Flex>
          <Link href="/withdraw">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p="1rem"
              cursor="pointer"
            >
              <Text>회원탈퇴</Text>
              <RightArrowIcon />
            </Flex>
          </Link>
          <Divider />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            p="1rem"
            borderBottom="30px solid #F9F9F9"
            cursor="pointer"
            w="100%"
            onClick={onOpen}
          >
            <Text>로그아웃</Text>
            <RightArrowIcon />
          </Flex>
          <LogoutModal
            isOpen={isOpen}
            onClose={onClose}
            userStoreClear={userStoreClearHandler}
          />
          <Divider />
        </>
      )}
    </>
  );
}

export default MypagePage;
