import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalProps,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface CustomModalProps {
  children: ReactNode;
  isOpen: ModalProps['isOpen'];
  onClose: ModalProps['onClose'];
}
export default function CustomModal({
  isOpen,
  onClose,
  children,
}: CustomModalProps) {
  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pt={'10'}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
