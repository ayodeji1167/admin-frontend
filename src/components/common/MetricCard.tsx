'use client';
import React from 'react';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import Icon from '@/components/ui/chakra/Icon';
import LottieLoader from '../Loader/LottieLoader';
import { useBreakpointValue } from '@chakra-ui/react';

export interface MetricCardProps {
  icon: any;
  name: string;
  value: string;
  isLoading?: boolean;
}
export default function MetricCard({
  name,
  value,
  icon,
  isLoading = false,
}: MetricCardProps) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  if (isLoading) {
    return <LottieLoader />;
  } else {
    return (
      <Flex
        px={{ base: '1.5rem', md: '1.5rem' }}
        alignItems={'center'}
        justifyContent={'space-between'}
        rounded={'.5rem'}
        bg={'white'}
        color={'#333638'}
        h={'100%'}
        py={{ base: '.5rem', md: '0' }}
      >
        <Box>
          <Text>{name}</Text>
          <Text
            mt={'.5rem'}
            fontWeight={700}
            fontSize={{ base: '1rem', md: '1.2rem' }}
          >
            {value}
          </Text>
        </Box>
        <Box>
          <Icon fontSize={isDesktop ? '5rem' : '3.5rem'} as={icon} />
        </Box>
      </Flex>
    );
  }
}
