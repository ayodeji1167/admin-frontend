'use client';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import CustomModal from '@/components/common/Modals/CustomModal';
import { Flex, Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import LogServiceModal from '../../services/add/log-service-modal';

export default function Head({ id }: { id: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} pt={'2rem'}>
      <Box>
        <Text mb={'.5rem'} textStyle={'subHeading'}>
          Vehicle Information
        </Text>
        <CustomBreadcrumb />
      </Box>

      <Box>
        <Button onClick={onOpen} minW={'9rem'}>
          Add New Service
        </Button>
      </Box>

      <CustomModal
        modalContentProps={{
          w: { base: '95%', md: '50rem' },
        }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <LogServiceModal onClose={onClose} id={id} />
      </CustomModal>
    </Flex>
  );
}
