import { Box, Button, Flex, IconButton, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import MenuIcon from '@components/common/@Icons/System/Menu';

import { LAYOUT } from '@constants/layout';

import {
  CommonHeaderVariantType,
  HOME_HEADER_VARIANTS,
} from './CommonHeader.data';
import CommonHeaderDrawer from './_fragments/CommonHeaderDrawer';

import { HeaderCartIcon } from 'generated/icons/MyIcons';

interface CommonHeaderProps {
  variant?: CommonHeaderVariantType;
}

const CommonHeader = ({ variant = 'light' }: CommonHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cssByVariant = HOME_HEADER_VARIANTS[variant];

  return (
    <>
      <Flex //header section
        as="header"
        w="100%"
        px="1rem"
        maxWidth="375px"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="sticky"
        transition="all 0.3s"
        h={LAYOUT.HEADER.HEIGHT}
        {...cssByVariant.header}
      >
        <IconButton // 메뉴 버튼
          color={cssByVariant.pointColor}
          icon={<MenuIcon w="24px" h="24px" />}
          onClick={onOpen}
          variant="transparentButton"
          aria-label="btn-toggle-drawer"
        />
        <Image // LOGO
          src="/images/LOGO.png"
          w="35%"
          h="25%"
          cursor="pointer"
        />
        <Button // 장바구니 버튼
          variant="transparentButton"
        >
          <HeaderCartIcon />
        </Button>
      </Flex>
      <CommonHeaderDrawer
        isOpen={isOpen}
        onClose={onClose}
        bodyProps={cssByVariant.drawer}
      />
    </>
  );
};

export default CommonHeader;
