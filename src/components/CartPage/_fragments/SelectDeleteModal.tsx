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

interface SelectDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SelectDeleteModal({ isOpen, onClose }: SelectDeleteModalProps) {
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
              <Text textStyle="sm_wb">선택한 상품이 삭제되었습니다.</Text>
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
                확인
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SelectDeleteModal;
