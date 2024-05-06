'use client';
import React from 'react';
import GridItem from '@/components/ui/chakra/GridItem';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import Button from '@/components/ui/chakra/Button';
import SimpleGrid from '@/components/ui/chakra/SimpleGrid';
import MetricCard from '../common/MetricCard';
import Link from 'next/link';
import { useGetMetrics } from '@/app/api/vehicles/get-metrics';
// import { vehicleMetrics } from './data';
import { PiTruckLight } from 'react-icons/pi';

export default function Top() {
  const { data, isLoading } = useGetMetrics();

  const vehicleMetrics = [
    {
      name: 'Vehicle Count',
      value: String(data?.data?.totalNumberOfVehicles),
      icon: PiTruckLight,
    },
    {
      name: 'Average Service Interval',
      value: String(data?.data?.averageServiceInterval),
      icon: PiTruckLight,
    },
    {
      name: 'Vehicle Added This Week',
      value: String(data?.data?.vehicleAddedThisWeek),
      icon: PiTruckLight,
    },
  ];
  return (
    <Box mt={'1.5rem'}>
      <Flex
        mb={'1.4rem'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text textStyle={'subHeading'}>Overview</Text>
        <Link href={'/vehicles/add'}>
          <Button minW={{ base: '8rem', md: '10rem' }}>Add vehicle</Button>
        </Link>
      </Flex>
      <SimpleGrid
        h={{ base: 'auto', md: '10rem' }}
        gap={'1.4rem'}
        row={{ base: 'auto', md: 1 }}
        columns={{ base: 1, md: 3 }}
      >
        {vehicleMetrics?.map((item, index) => (
          <GridItem key={index}>
            <MetricCard isLoading={isLoading} {...item} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
