import { useRouter } from 'next/router';

import { Box, Center, Text, VStack } from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

import {
  EditUserInfoIcon,
  MyProductReviewIcon,
  OrderHistoryIcon,
} from 'generated/icons/MyIcons';

interface IconBtnSectionProps {
  routerPath: string;
  text: string;
}

function IconBtnSection({ routerPath, text }: IconBtnSectionProps) {
  const route = useRouter();
  const printIcon =
    routerPath === ROUTES.EDIT_USER_INFO ? (
      <EditUserInfoIcon w="41px" h="21px" color="primary.500" />
    ) : routerPath === ROUTES.ORDER_HISTORY ? (
      <OrderHistoryIcon w="36px" h="33px" color="primary.500" />
    ) : (
      <MyProductReviewIcon w="28px" h="25px" color="primary.500" />
    );

  return (
    <Box flexGrow="1" cursor="pointer" onClick={() => route.push(routerPath)}>
      <VStack>
        <Center w="50px" h="50px">
          {printIcon}
        </Center>
        <Text>{text}</Text>
      </VStack>
    </Box>
  );
}
export default IconBtnSection;
