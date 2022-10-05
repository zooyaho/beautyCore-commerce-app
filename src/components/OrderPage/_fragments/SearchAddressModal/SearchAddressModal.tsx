import React from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

interface IModalInfo {
  searchCompleteHandler: (data: Address) => void;
}

function SearchAdressModal({ searchCompleteHandler }: IModalInfo) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="80%" m="0" alignSelf="center">
          <ModalBody p="0">
            <DaumPostcode
              onComplete={searchCompleteHandler}
              onClose={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button
        variant="primaryButton"
        w="30%"
        h="40px"
        borderRadius="5px"
        onClick={onOpen}
      >
        <Text as="span" fontSize="12px">
          우편번호 검색
        </Text>
      </Button>
    </>
  );
}

export default SearchAdressModal;
