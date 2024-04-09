'use client';
import React from 'react';
import GridItem from '@/components/ui/chakra/GridItem';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import Button from '@/components/ui/chakra/Button';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import { invoicessMetrics } from './data';
import MetricCard from '@/components/common/MetricCard';
import { useDisclosure } from '@chakra-ui/react';
import CustomModal from '@/components/common/CustomModal';
import LogServiceModal from '@/components/vehicle/view/log-service-modal';

export default function Top() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box mt={'1.5rem'}>
      <Flex
        mb={'1.4rem'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text textStyle={'subHeading'}>Invoices</Text>
        <Button onClick={onOpen} minW={'10rem'}>
          Create new Invoice
        </Button>
      </Flex>
      <SimpleGrid h={'10rem'} gap={'1.4rem'} row={1} columns={4}>
        {invoicessMetrics.map((item, index) => (
          <GridItem key={index}>
            <MetricCard {...item} />
          </GridItem>
        ))}
      </SimpleGrid>

      <CustomModal
        modalContentProps={{
          minW: { base: '95%', md: '50rem' },
        }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <LogServiceModal />
      </CustomModal>
    </Box>
  );
}
