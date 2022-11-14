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
  useDisclosure,
} from '@chakra-ui/react';

import OrderCancelDoneModal from './OrderCancelDoneModal';

interface OrderCancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderCancelHandler: () => Promise<void>;
}

function OrderCancelModal({
  isOpen,
  onClose,
  orderCancelHandler,
}: OrderCancelModalProps) {
  const { isOpen: isDoneOpen, onClose: onDoneClose, onOpen } = useDisclosure();
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
              <Text textStyle="sm_wb">주문취소 하시겠습니까?</Text>
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
                  orderCancelHandler();
                  onClose();
                  onOpen();
                }}
                flexGrow="1"
              >
                확인
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <OrderCancelDoneModal isOpen={isDoneOpen} onClose={onDoneClose} />
    </>
  );
}

export default OrderCancelModal;
