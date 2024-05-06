import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { useRef } from 'react';

export function ConsentModal({ onClose, isOpen, setProceed }: any) {
  const cancelRef = useRef<any>();

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Create Invoice
            </AlertDialogHeader>

            <AlertDialogBody>
              {`Are you sure? You can't undo this action afterwards.`}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => {
                  setProceed(false);
                  onClose();
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  setProceed(true);
                  onClose();
                }}
                ml={3}
              >
                Proceed
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
