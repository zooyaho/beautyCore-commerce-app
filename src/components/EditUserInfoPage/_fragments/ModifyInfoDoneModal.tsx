import Link from 'next/link';

import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import { ROUTES } from '@constants/routes';

interface ModifyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModifyInfoModal({ isOpen, onClose }: ModifyInfoModalProps) {
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
          <ModalCloseButton />
          <ModalBody>
            <Center h="100%" mt="1rem">
              <Text textStyle="sm_wb">회원정보 수정이 완료되었습니다.</Text>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Center w="100%">
              <Button
                type="submit"
                variant="primaryButton"
                onClick={onClose}
                w="50%"
              >
                <Link href={ROUTES.MYPAGE}>
                  <Center as="a" w="100%" h="100%">
                    확인
                  </Center>
                </Link>
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModifyInfoModal;
