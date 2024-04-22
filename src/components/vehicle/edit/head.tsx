'use client';
import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import CustomModal from '@/components/common/CustomModal';
import LogServiceModal from '@/components/services/add/log-service-modal';
import { Flex, Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

export default function Head({ id }: { id: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} pt={'2rem'}>
      <Box>
        <Text mb={'.5rem'} textStyle={'subHeading'}>
          Customer Details
        </Text>
        <CustomBreadcrumb />
      </Box>

      <Box>
        <Button onClick={onOpen} minW={'9rem'}>
          Log New Service
        </Button>
      </Box>

      <CustomModal
        modalContentProps={{
          minW: { base: '95%', md: '50rem' },
        }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <LogServiceModal id={id} />
      </CustomModal>
    </Flex>
  );
}
