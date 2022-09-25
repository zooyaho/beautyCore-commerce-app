// import { Link } from '@chakra-ui/react';
// import { Link as RouterLink } from 'next/link';
import Link from 'next/link';

import {
  Box,
  Button,
  ChakraProps,
  Container,
  Divider,
  DrawerHeader,
  DrawerProps,
  Flex,
  List,
  ListItem,
  Spacer,
  Text,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

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
        <DrawerBody //
          {...bodyProps}
          py="0px"
          px="0px"
          position="relative"
        >
          <DrawerCloseButton //
            w="40px"
            h="40px"
            top="20px"
            right={{ base: '16px', md: '80px' }}
            onClick={basisProps.onClose}
          />
          <Flex flexDirection="column">
            <Container as="header">
              <Text
                as="h3"
                textStyle="lg"
                fontWeight="bold"
                mt="80px"
                mb="30px"
              >
                카테고리
              </Text>
            </Container>
            <Divider />
            <Box as="nav">
              <List textStyle="md" fontWeight="bold">
                <ListItem p="1rem">
                  <Link href="/">홈</Link>
                </ListItem>
                <Divider />
                <ListItem p="1rem">
                  <Link href="/">상품보기</Link>
                </ListItem>
                <Divider />
                <ListItem p="1rem">
                  <Link href="/">마이페이지</Link>
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
              <Button
                leftIcon={<LogoutIcon />}
                colorScheme="transparent"
                border="0"
                px="0"
              >
                <Text as="span" color="black" textStyle="lg" fontWeight="bold">
                  로그아웃
                </Text>
              </Button>
            </Container>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CommonHeaderDrawer;
