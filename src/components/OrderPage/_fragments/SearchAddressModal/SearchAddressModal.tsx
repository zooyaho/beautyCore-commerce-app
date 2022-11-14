import React from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';

import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';

interface SearchAdressModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchCompleteHandler: (data: Address, type: string) => void;
  type: string;
}

function SearchAdressModal({
  isOpen,
  onClose,
  searchCompleteHandler,
  type,
}: SearchAdressModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="80%" m="0" alignSelf="center">
        <ModalBody p="0">
          <DaumPostcode
            onComplete={(data) => {
              searchCompleteHandler(data, type);
            }}
            onClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SearchAdressModal;
