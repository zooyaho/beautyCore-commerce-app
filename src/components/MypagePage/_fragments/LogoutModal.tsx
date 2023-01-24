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

import { deleteToken } from '@utils/localStorage/token';
import { deleteUser } from '@utils/localStorage/user';

interface LogoutModal {
  isOpen: boolean;
  onClose: () => void;
}

function LogoutModal({ isOpen, onClose }: LogoutModal) {
  const userStoreClearHandler = () => {
    deleteUser();
    deleteToken();
  };

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
              <Text textStyle="sm_wb">로그아웃 하시겠습니까?</Text>
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
                취소
              </Button>
              <Button
                type="submit"
                variant="primaryButton"
                onClick={() => {
                  userStoreClearHandler();
                  onClose();
                }}
                flexGrow="1"
              >
                <Link href="/login">
                  <Center as="a" w="100%" h="100%">
                    확인
                  </Center>
                </Link>
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LogoutModal;
