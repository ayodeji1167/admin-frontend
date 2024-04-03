import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalProps,
  ModalContentProps,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface CustomModalProps {
  children: ReactNode;
  isOpen: ModalProps['isOpen'];
  onClose: ModalProps['onClose'];
  modalContentProps?: ModalContentProps;
}
export default function CustomModal({
  isOpen,
  onClose,
  children,
  modalContentProps,
}: CustomModalProps) {
  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent minW={{ base: '95%', md: '40rem' }} {...modalContentProps}>
        <ModalCloseButton />
        <ModalBody pt={'10'}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
