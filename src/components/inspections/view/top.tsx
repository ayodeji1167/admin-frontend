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

import Link from 'next/link';

export default function Top() {
  return (
    <Box mt={'1.5rem'}>
      <Flex
        mb={'1.4rem'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text textStyle={'subHeading'}>Inspection Reports</Text>

        <Link href={'/inspections/add'}>
          <Button minW={'12rem'}>Create new Inspection</Button>
        </Link>
      </Flex>
      <SimpleGrid
        h={'10rem'}
        gap={'1.4rem'}
        row={1}
        columns={{ base: 2, md: 3 }}
      >
        {invoicessMetrics.map((item, index) => (
          <GridItem key={index}>
            <MetricCard {...item} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
