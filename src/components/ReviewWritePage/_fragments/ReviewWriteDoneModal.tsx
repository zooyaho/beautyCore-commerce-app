import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

interface ReviewWriteDoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ReviewWriteDoneModal({ isOpen, onClose }: ReviewWriteDoneModalProps) {
  return (
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
            <Text textStyle="sm_wb">리뷰작성이 완료되었습니다.</Text>
          </Center>
        </ModalBody>
        <ModalFooter>
          <Center w="100%">
            <Button
              type="button"
              w="50%"
              variant="primaryButton"
              onClick={onClose}
            >
              확인
            </Button>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ReviewWriteDoneModal;
