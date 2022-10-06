import Link from 'next/link';

import {
  Box,
  ChakraProps,
  Container,
  Divider,
  DrawerProps,
  Flex,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

import { LogoutIcon } from 'generated/icons/MyIcons';

interface CommonHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const CommonHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: CommonHeaderDrawerProps) => {
  return (
    <Drawer placement="left" {...basisProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody {...bodyProps} py="0px" px="0px" position="relative">
          <DrawerCloseButton
            w="40px"
            h="40px"
            top="20px"
            right={{ base: '16px', md: '80px' }}
            onClick={basisProps.onClose}
          />
          <Flex flexDirection="column">
            <Container as="header">
              <Text as="h3" textStyle="sl_wb" mt="80px" mb="30px">
                카테고리
              </Text>
            </Container>
            <Divider />
            <Box as="nav">
              <List textStyle="sm_wb">
                <ListItem p="1rem" onClick={basisProps.onClose}>
                  <Link href="/home">홈</Link>
                </ListItem>
                <Divider />
                <ListItem p="1rem">
                  <Link href="product-list">상품보기</Link>
                </ListItem>
                <Divider />
                <ListItem p="1rem">
                  <Link href="mypage">마이페이지</Link>
                </ListItem>
                <Divider />
              </List>
            </Box>
            <Container
              as="footer"
              mb="1rem"
              position="absolute"
              bottom="0"
              left="0"
            >
              <Link href="login">
                <Text as="span" textStyle="sl_wb">
                  <LogoutIcon />
                  로그아웃
                </Text>
              </Link>
            </Container>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CommonHeaderDrawer;
