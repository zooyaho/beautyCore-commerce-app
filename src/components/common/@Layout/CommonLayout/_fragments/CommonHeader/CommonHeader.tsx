import Link from 'next/link';
import { useRouter } from 'next/router';

import { Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import MenuIcon from '@components/common/@Icons/System/Menu';
import CartButton from '@components/common/CartButton';

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
  const router = useRouter();

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
          alt="Bueaty core logo"
          w="35%"
          h="25%"
          cursor="pointer"
          onClick={() => router.push('/home')}
        />
        <CartButton variant="transparentButton">
          <Link href="/cart">
            <Text as="a">
              <HeaderCartIcon />
            </Text>
          </Link>
        </CartButton>
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
