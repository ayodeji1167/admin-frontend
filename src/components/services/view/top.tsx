'use client';
import React from 'react';
import GridItem from '@/components/ui/chakra/GridItem';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import Button from '@/components/ui/chakra/Button';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import { servicesMetrics } from './data';
import MetricCard from '@/components/common/MetricCard';
import { useDisclosure } from '@chakra-ui/react';
import CustomModal from '@/components/common/CustomModal';
import LogServiceModal from '@/components/services/add/log-service-modal';

export default function Top() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box mt={'1.5rem'}>
      <Flex
        mb={'1.4rem'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text textStyle={'subHeading'}>Service management</Text>
        <Button onClick={onOpen} minW={'10rem'}>
          Log new service
        </Button>
      </Flex>
      <SimpleGrid h={'10rem'} gap={'1.4rem'} row={1} columns={3}>
        {servicesMetrics.map((item, index) => (
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
        <LogServiceModal onClose={onClose} />
      </CustomModal>
    </Box>
  );
}
