'use client';
import React from 'react';
import GridItem from '@/components/ui/chakra/GridItem';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import Button from '@/components/ui/chakra/Button';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import MetricCard from '../common/MetricCard';
import { dashboardMetrics } from '@/data/metrics';

export default function Top() {
  return (
    <Box mt={'1.5rem'}>
      <Flex
        mb={{ base: '1rem', md: '1.4rem' }}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text textStyle={'subHeading'}>Overview</Text>
        <Button minW={'10rem'}>Log Services</Button>
      </Flex>
      <SimpleGrid
        h={{ base: 'auto', md: '10rem' }}
        gap={'1.4rem'}
        row={1}
        columns={{ base: 1, md: 3 }}
      >
        {dashboardMetrics.map((item, index) => (
          <GridItem key={index}>
            <MetricCard {...item} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
