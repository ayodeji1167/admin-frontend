'use client';
import React from 'react';
import Box from '@/components/ui/chakra/Box';
import Flex from '@/components/ui/chakra/Flex';
import Text from '@/components/ui/chakra/Text';
import Icon from '@/components/ui/chakra/Icon';

export interface MetricCardProps {
  icon: any;
  name: string;
  value: string;
}
export default function MetricCard({ name, value, icon }: MetricCardProps) {
  return (
    <Flex
      px={'1.5rem'}
      alignItems={'center'}
      justifyContent={'space-between'}
      rounded={'.5rem'}
      bg={'white'}
      color={'#333638'}
      h={'100%'}
    >
      <Box>
        <Text>{name}</Text>
        <Text mt={'.5rem'} fontWeight={700} fontSize={'1.2rem'}>
          {value}
        </Text>
      </Box>
      <Box>
        <Icon fontSize={'7rem'} as={icon} />
      </Box>
    </Flex>
  );
}