import Link from 'next/link';

import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { AUTH_STATUS } from '@constants/authStatus';

interface AuthRouteModalProps {
  authStatus: string;
}

function AuthRouteModal({ authStatus }: AuthRouteModalProps) {
  const { onClose } = useDisclosure();
  return (
    <>
      <Modal
        isCentered
        isOpen={true}
        onClose={onClose}
        motionPreset="slideInBottom"
        blockScrollOnMount
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent maxW="343px" h="300px">
          <ModalBody>
            <Center h="100%" mt="1rem">
              <Text textStyle="sm_wb">
                {authStatus === AUTH_STATUS.LOGIN
                  ? `이미 계정이 있으므로${(<br />)} 홈으로 이동합니다.`
                  : '로그인이 필요한 서비스입니다.'}
              </Text>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Flex w="100%" gap="1rem">
              <Button
                type="submit"
                variant="primaryButton"
                onClick={onClose}
                flexGrow="1"
              >
                <Link
                  href={authStatus === AUTH_STATUS.LOGIN ? '/home' : '/login'}
                >
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

export default AuthRouteModal;
