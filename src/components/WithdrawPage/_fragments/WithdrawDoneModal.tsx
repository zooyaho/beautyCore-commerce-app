import Link from 'next/link';

import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

interface WithdrawDoneProps {
  isOpen: boolean;
  onClose: () => void;
}

function WithdrawDoneModal({ isOpen, onClose }: WithdrawDoneProps) {
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
          <ModalBody>
            <Center h="100%" mt="1rem">
              <Text textStyle="sm_wb">탈퇴가 완료되었습니다.</Text>
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
                <Link href="/login">
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

export default WithdrawDoneModal;
