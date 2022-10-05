import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import {
  MinusCartButtonIcon,
  PlusCartButtonIcon,
} from 'generated/icons/MyIcons';

function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex flexDirection="column" gap=".7rem">
        <Button variant="whiteButton" size="lg">
          장바구니
        </Button>
        <Button variant="primaryButton" size="lg" onClick={onOpen}>
          바로구매
        </Button>
      </Flex>
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius="20px 20px 0px 0px">
          <DrawerBody>
            <Box bg="gray.200" borderRadius="5px" my="1rem" p=".7rem">
              <Text fontWeight="400" textColor="gray.600" textStyle="md">
                바스 &amp; 샴푸
              </Text>
              <Flex mt=".3rem">
                <Flex
                  bg="white"
                  border="1px solid #EAECF0"
                  borderRadius="5px"
                  h="25px"
                >
                  <Button variant="transparentButton" w="1.5rem" h="1.5rem">
                    <MinusCartButtonIcon boxSize="25px" />
                  </Button>
                  <Text
                    w="25px"
                    textAlign="center"
                    textStyle="sm"
                    lineHeight="25px"
                    borderLeft="1px solid #EAECF0"
                    borderRight="1px solid #EAECF0"
                  >
                    2
                  </Text>
                  <Button variant="transparentButton" w="1.5rem" h="1.5rem">
                    <PlusCartButtonIcon boxSize="25px" />
                  </Button>
                </Flex>
                <Spacer />
                <Text textStyle="sm_wb_cg600">54,000원</Text>
              </Flex>
            </Box>
            <Flex>
              <Text>
                총&nbsp;수량&nbsp;
                <Text as="strong" textStyle="sm_wb_cp">
                  2
                </Text>
                &nbsp;개
              </Text>
              <Spacer />
              <Text>
                합계&nbsp;
                <Text as="strong" textStyle="sm_wb">
                  54,000원
                </Text>
              </Text>
            </Flex>
            <Flex mt="1rem" mb="1.5rem" gap=".7rem">
              <Button variant="whiteButton" size="lg">
                장바구니
              </Button>
              <Button variant="primaryButton" size="lg">
                바로구매
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default CartDrawer;
