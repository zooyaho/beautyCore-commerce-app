import Link from 'next/link';

import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

interface AddCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCartModal({ isOpen, onClose }: AddCartModalProps) {
  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        blockScrollOnMount
      >
        <ModalOverlay />
        <ModalContent maxW="343px" h="300px">
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Center h="100%" mt="1rem">
              <Text textStyle="sm_wb">장바구니에 상품이 담겼습니다.</Text>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Flex w="100%" gap="1rem">
              <Button
                type="submit"
                variant="whiteButton"
                onClick={onClose}
                flexGrow="1"
              >
                <Link href="/cart">
                  <Center as="a" w="100%" h="100%">
                    장바구니 이동
                  </Center>
                </Link>
              </Button>
              <Button
                type="submit"
                variant="primaryButton"
                onClick={onClose}
                flexGrow="1"
              >
                쇼핑 계속하기
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCartModal;
