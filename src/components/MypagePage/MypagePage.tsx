import React from 'react';

import {
  Box,
  Center,
  CircularProgress,
  Container,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useGetUserMe } from '@apis/user/userApi.query';

import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';
import { deleteToken } from '@utils/localStorage/token';
import { deleteUser } from '@utils/localStorage/user';

import ArrowBtnSection from './_fragments/ArrowBtnSection';
import IconBtnSection from './_fragments/IconBtnSection';
import LogoutModal from './_fragments/LogoutModal';

function MypagePage() {
  const { data: userData, isLoading } = useGetUserMe();
  const { onOpen, isOpen, onClose } = useDisclosure();

  const userStoreClearHandler = () => {
    deleteUser();
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
            <IconBtnSection
              routerPath={ROUTES.EDIT_USER_INFO}
              text={'회원정보수정'}
            />
            <IconBtnSection routerPath={'/order-history'} text={'주문내역'} />
            <IconBtnSection
              routerPath={'/my-product-review'}
              text={'내 상품 리뷰'}
            />
          </Flex>
          <Box borderBottom="30px solid #F9F9F9">
            <ArrowBtnSection routerPath={'/withdraw'} text={'회원탈퇴'} />
            <Divider />
            <ArrowBtnSection
              modalOpen={onOpen}
              text={'로그아웃'}
              borderBottom="30px solid #F9F9F9"
            />
          </Box>
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
