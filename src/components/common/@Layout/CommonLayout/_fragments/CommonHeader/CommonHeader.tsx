import Link from 'next/link';
import { useRouter } from 'next/router';

import { Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import { HeaderCartIcon } from '@components/common/@Icons/MyIcons';
import MenuIcon from '@components/common/@Icons/System/Menu';
import CartButton from '@components/common/CartButton';

import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';

import CommonHeaderDrawer from './_fragments/CommonHeaderDrawer';

const CommonHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

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
      >
        <IconButton // 메뉴 버튼
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
          onClick={() => router.push(ROUTES.HOME)}
        />
        <CartButton variant="transparentButton">
          <Link href={ROUTES.CART}>
            <Text as="a">
              <HeaderCartIcon />
            </Text>
          </Link>
        </CartButton>
      </Flex>
      <CommonHeaderDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CommonHeader;
