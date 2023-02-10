import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Divider,
  DrawerFooter,
  DrawerHeader,
  Flex,
  List,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

import LogoutModal from '@components/MypagePage/_fragments/LogoutModal';
import { LogoutIcon } from '@components/common/@Icons/MyIcons';

import { ROUTES } from '@constants/routes';

interface CommonHeaderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommonHeaderDrawer = ({ isOpen, onClose }: CommonHeaderDrawerProps) => {
  const {
    onOpen,
    isOpen: logoutIsOpen,
    onClose: logoutOnClose,
  } = useDisclosure();

  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent p="0px">
        <DrawerCloseButton w="40px" h="40px" top="20px" onClick={onClose} />
        <DrawerHeader borderBottomWidth="1px" p="0 0 0 16px">
          <Text as="h3" textStyle="sl_wb" mt="80px" mb="30px">
            카테고리
          </Text>
        </DrawerHeader>

        <DrawerBody as="nav" p="0">
          <List textStyle="sm_wb">
            <ListItem p="1rem" onClick={onClose} borderBottomWidth="1px">
              <Link href={ROUTES.HOME}>홈</Link>
            </ListItem>
            <ListItem p="1rem" borderBottomWidth="1px">
              <Link href={ROUTES.PRODUCT_LIST}>상품보기</Link>
            </ListItem>
            <ListItem p="1rem" borderBottomWidth="1px">
              <Link href={ROUTES.MYPAGE}>마이페이지</Link>
            </ListItem>
          </List>
        </DrawerBody>

        <DrawerFooter mb="1rem" ml="1rem" position="relative" w="100%">
          <Button
            variant="transparentButton"
            onClick={onOpen}
            position="absolute"
            bottom="0"
            left="0"
          >
            <LogoutIcon />
            <Text as="span" textStyle="sl_wb" ml=".3rem">
              로그아웃
            </Text>
          </Button>
          <LogoutModal isOpen={logoutIsOpen} onClose={logoutOnClose} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CommonHeaderDrawer;
