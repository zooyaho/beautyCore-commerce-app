import { ChakraProps, DrawerProps } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

interface CommonHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const CommonHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: CommonHeaderDrawerProps) => {
  return (
    <Drawer placement="left" size="sm" {...basisProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody //
          {...bodyProps}
          py="0px"
          px="16px"
          position="relative"
        >
          <DrawerCloseButton //
            w="40px"
            h="40px"
            top="20px"
            right={{ base: '16px', md: '80px' }}
            onClick={basisProps.onClose}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CommonHeaderDrawer;
